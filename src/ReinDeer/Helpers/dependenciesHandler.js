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


export default function dependenciesHandler(){
  let dependencies = this.state.d.dependencies; //todo - Change d
  let config = this.state.config;

  dependencies.forEach((dependency) => {
    let matched_rule,
      section = Object.assign([], config[dependency.section_id]),
      dependent_entity = getEntity(section, dependency.entity_key);

    dependency.rules.forEach((rule) => {
      // Handle for table
      let entity = getEntity(config, rule.entity_key);
      let entity_value = (entity.value || entity.default_value),
        match_value = rule.match_value;
      if(parseInt(match_value) === parseInt(entity_value)){
        matched_rule = rule
      }
    });

    if(matched_rule){
      dependent_entity.choices.scoped_choices = Object.assign([], matched_rule.choices.choices)
      dependent_entity.class_name = dependent_entity.class_name === "tick" ? "tock" : "tick";
    } else {
      if(Array.isArray(dependent_entity?.choices?.scoped_choices)){
        dependent_entity.choices.scoped_choices.length = 0
      } else {
        dependent_entity.choices.scoped_choices = []
      }
    }

    this.setState({section_name: section})
  });
}