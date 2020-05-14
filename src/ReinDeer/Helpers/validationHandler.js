/**
 * Validates each field and adds error message
 *
 * @constructor
 * @author: kumar.abinash@finly.io
 * @todo
 *   - update state once
 *
 * @returns
 */

import getEntity from "./getEntity";
import matcher from "./matcher";

export default function validationHandler(){
  let validations = this.state.d.validations || []; //todo - Update where conditions are stored in state
  let config = this.state.config; // Todo - change config location from state

  validations.forEach((validation) => {
    let section = Object.assign([], config[validation.section_id]),
      reference_entity = getEntity(section, validation.entity_key);

    let matched = validation.rules.every((rule) => {
      let entity = getEntity(config, rule.entity_key);
      return matcher(rule, entity);
    });
    if(matched){
      reference_entity['error_message'] = validation.error_message;
    } else {
      if(reference_entity?.error_message){
        reference_entity.error_message = null;
      }
    }

    this.setState({section_name: section})
  });
}



/*
  Sample Conditions
  "validations": [
    {
      "entity_key": "policy_id",
      "error_message": "Amount cannot exceed INR ",
      "rules": [
        {
          "entity_key": "amount_value",
          "predicate": "gteq",
          "match_type": "value/formula/entity",
          "match_value": [""],
          "match_formula": "{{}}",
          "match_entity_key": "budget_value"
        }
      ]
    }
  ]
 */
