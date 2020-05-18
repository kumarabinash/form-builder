import produce, {createDraft, finishDraft} from "immer";
import getEntity from "./getEntity";
import dependenciesHandler from "./dependenciesHandler";
import conditionalHandler from "./conditionalHandler";
import validationHandler from "./validationHandler";
import compute from "./computationEngine";

import {getEntityWithPath} from "./getEntity";


function updateState(section_name, key, value, event) {

  let updateData = {...this.state.form_data};
  updateData[key] = value;



  this.setState(
    produce(oldState => {
      oldState.form_data[key] = value; // todo - change form data name
      // oldState.data_update_render = false;
      // Set a flag to prevent rerender ## Ref 1
    })
  ,() => {
      let section = Object.assign([], this.state.config[section_name]);
      let item = getEntity(section, key);

      let computations = compute.bind(this)();

      // Run Validation
      let validations = validationHandler.bind(this)();

      // Update Dependencies
      let dependencies = dependenciesHandler.bind(this)();

      // Update Conditions
      let conditions = conditionalHandler.bind(this)();


      // Create Draft
      const draft = createDraft(this.state);

      // Update Draft

      // computations.forEach((item, index) => {
      //   // Handle Table Update
      // })

      // Update Dependencies
      for(let i = 0, length = dependencies.length; i < length; i++){

        let data = dependencies[i];

        let draft_entity = getEntityWithPath(draft.config, data.entity_path); // todo - update config name

        debugger;
        if(data.rule){
          draft_entity.choices.scoped_choices = Object.assign([], data.rule.choices.choices);
          // updated = true;
        } else {
          if(Array.isArray(draft_entity?.choices?.scoped_choices) && draft_entity?.choices?.scoped_choices?.length){
            draft_entity.choices.scoped_choices.length = 0
          } else {
            draft_entity.choices.scoped_choices = []
          }
        }
      }

      // Update Validations
      for(let i = 0, length = validations.length; i < length; i++){
        let data = validations[i],
          draft_entity = getEntityWithPath(draft.config, data.validation.entity_path); // todo - update config name

        if(data.matched){
          draft_entity['error_message'] = data.validation.error_message;
        } else {
          if(draft_entity?.error_message){
            draft_entity.error_message = null;
          }
        }
      }

      // Update Conditions
      for(let i = 0, length = conditions.length; i < length; i++){
        let data = conditions[i],
          draft_entity = getEntityWithPath(draft.config, data.condition.entity_path); // todo - update config name

        if(data.matched){
          draft_entity['conditional_behaviour'] = data.condition.actions.reduce(function(acc, action) {
            acc[action.property] = action.value;
            return acc;
          }, {});
        } else {
          delete draft_entity.conditional_behaviour
        }
      }



      // Computations > Update Final State
      Promise.all(computations.map(data => {return data.promise}))
        .then((results) => {

          for(let i = 0, length = computations.length; i < length; i++){
            draft.form_data[computations[i].computation.entity_key] = results[i];
          }

          const newState = finishDraft(draft);

          this.setState(newState);
        });


      // Get all the changes from above function to update the state once & set the flag to rerender
    }
  );
}

function updateFormData(key, value){
  this.setState(
    produce((oldState) => {
      oldState.form_data[key] = value;
    })
  );
}

export default updateState;
export {updateFormData};