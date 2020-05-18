/**
 * Finds form-entity from given forms-entity-config
 *
 * @constructor
 * @author: kumar.abinash@finly.io
 * @param {object} data - form-entity-config
 * @todo
 *   - Right now it updates the dependencies one after the other in the state, can be combined together to update state at once
 *   - Check if setState is required by checking value of the scoped_choices and new choices etc
 *
 * @returns
 */

import {getEntityWithPath} from "./getEntity";
import {rootEntityValue} from "./valueResolver";
import {createDraft, finishDraft} from "immer";


export default function dependenciesHandler(){
  let dependencies = this.state.d.dependencies; //todo - Change d
  dependencies.forEach((dependency) => {
    let matched_rule,
      path = dependency.entity_path;

    dependency.rules.forEach((rule) => {
      // Handle for table
      // let entity = getEntity(config, rule.entity_key);
      /* Get Value from form_data */
      let entity_value = rootEntityValue.bind(this)(rule.entity_key),
        match_value = rule.match_value;
      if(parseInt(match_value) === parseInt(entity_value)){
        matched_rule = rule
      }
    });

    // Create draft
    const draft = createDraft(this.state);

    // Modify draft
    let draft_entity = getEntityWithPath(draft.config, path); // todo - update config name

    if(matched_rule){
      draft_entity.choices.scoped_choices = Object.assign([], matched_rule.choices.choices)
    } else {
      if(Array.isArray(draft_entity?.choices?.scoped_choices)){
        draft_entity.choices.scoped_choices.length = 0
      } else {
        draft_entity.choices.scoped_choices = []
      }
    }

    // Finish Draft
    const newState = finishDraft(draft);

    this.setState(newState);
  });
}