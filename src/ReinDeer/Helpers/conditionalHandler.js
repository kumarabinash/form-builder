/**
 * Finds form-entity from given forms-entity-config
 *
 * @constructor
 * @author: kumar.abinash@finly.io
 * @param {object} data - form-entity-config
 * @todo
 *   - Right now it updates the dependencies one after the other in the state, can be combined together to update state at once
 *
 * @returns
 */

import getEntity from "./getEntity";
import matcher from "./matcher";

export default function conditionalHandler(){
  let conditions = this.state.d.conditions || []; //todo - Update where conditions are stored in state
  let config = this.state.config; // Todo - change config location from state

  conditions.forEach((condition) => {
    let section = Object.assign([], config[condition.section_id]),
      reference_entity = getEntity(section, condition.reference_key);

    let matched = condition.rules.every((rule) => {
      let entity = getEntity(config, rule.entity_key);
      return matcher(rule, entity);
    });

    if(matched){

      reference_entity['conditional_behaviour'] = condition.actions.reduce(function(acc, action) {
        acc[action.property] = action.value;
        return acc;
      }, {});

    } else {
      delete reference_entity.conditional_behaviour
    }


    this.setState({section_name: section})
  });
}


/*
  Sample Conditions
  "conditions": [
    {
      "reference_type": "entity",
      "section_id": "header",
      "reference_key": "policy_id",
      "rules": [
        {
          "entity_key": "status_id",
          "predicate": "not_in",
          "match_type": "value/formula/entity",
          "match_value": ["", "", ""],
          "match_formula": "{{}}",
          "match_entity_key": "invoice_date"
        }
      ],
      "actions": [
        {
          "property": "editable",
          "value": false
        }
      ]
    }
  ]
 */
