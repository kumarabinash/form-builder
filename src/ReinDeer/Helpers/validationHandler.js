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
import {rootEntityValue, nestedEntityValue} from "./valueResolver";

export default function validationHandler(){
  let validations = this.state.d.validations || []; //todo - Update where conditions are stored in state
  // let config = this.state.config; // Todo - change config location from state
  let bundle = [];

  validations.forEach((validation) => {
    // let section = Object.assign([], config[validation.section_id]),
    //   reference_entity = getEntity(section, validation.entity_key);

    let matched = validation.rules.every((rule) => {
      let entity_value = rootEntityValue.bind(this)(rule.entity_key);

      return matcher(rule, entity_value);
    });

    bundle.push({matched: matched, validation: validation});

    // if(matched){
    //   reference_entity['error_message'] = validation.error_message;
    // } else {
    //   if(reference_entity?.error_message){
    //     reference_entity.error_message = null;
    //   }
    // }

    // this.setState({section_name: section})
  });

  return bundle;
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
