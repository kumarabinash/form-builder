import produce, {createDraft, finishDraft} from "immer";
import getEntity from "./getEntity";
import dependenciesHandler from "./dependenciesHandler";
import conditionalHandler from "./conditionalHandler";
import validationHandler from "./validationHandler";
import compute from "./computationEngine";



function updateState(section_name, key, value, event) {

  let updateData = {...this.state.form_data};
  updateData[key] = value;

  this.setState(
    produce(oldState => {
      oldState.form_data[key] = value; // todo - change form data name
    })
  ,() => {
      let section = Object.assign([], this.state.config[section_name]);
      let item = getEntity(section, key);

      compute.bind(this)();
      if(item.field_type === "text"){

        // Run Validation
        validationHandler.bind(this)();

      } else {
        // Run Validation
        validationHandler.bind(this)();

        // Update Dependencies
        dependenciesHandler.bind(this)();

        // Update Conditions
        conditionalHandler.bind(this)();
      }
    }
  );
}

function updateFormData(key, value){
  this.setState(
    produce((oldState) => {
      debugger
      oldState.form_data[key] = value;
    })
  );
}

export default updateState;
export {updateFormData};