import React from 'react';
import FormGroupDecorator from "./Components/FormGroupDecorator";
import COMPONENTS_MASTER from "./ComponentsMaster";

function Reindeer(props){
  let parent_context = props.parent_context;
  let items = Object.values(props.config.entities)
    .sort((a, b) => a.position - b.position)
    .filter((item) => item.visible);

  return(
    <>
      {items.map((item, key) => {
        let field_type = item.field_type;

        let FormComponent = COMPONENTS_MASTER[field_type] || COMPONENTS_MASTER['text'];

        return(
          <FormGroupDecorator
            config={item}
            onChange={updateData.bind(parent_context)}
            parent_context={parent_context}
            component={FormComponent}
          />
        )
      })}
    </>
  )
}

//
function updateData(section_name, key, value, event) {
  let section = Object.assign([], this.state.config[section_name]);
  let item = getEntity(section, key);
  item.value = value;

  this.setState({section_name: section}, () => {
    updateDependencies.bind(this)();
  });
}

function updateDependencies(){
  let dependencies = this.state.d.dependencies; //todo - Change d

  dependencies.forEach((item) => {
    let matched_rule,
      section = Object.assign([], this.state.config[item.section_id]),
      dependent_entity = getEntity(section, item.entity_key);

    item.rules.forEach((rule) => {
      // Handle for table
      let entity = getEntity(this.state.config, rule.entity_key);

      let entity_value = (entity.value || entity.default_value),
        match_value = rule.match_value;

      if(parseInt(match_value) === parseInt(entity_value)){

        matched_rule = rule

      }

    });

    if(matched_rule){

      dependent_entity.choices.scoped_choices = Object.assign([], matched_rule.choices.choices)

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

function conditionMatcher(rule, value){
  let predicate = rule.predicate;

  switch (predicate) {
    case "eq":
      break;
    case "contains":
      if(rule.match_value.map((item) => parseInt(item)).indexOf(parseInt(value))){
        return true;
      }
      break;
    default:
      return false
  }
}

function getEntity(data, field_key) {
  if(data.hasOwnProperty('field_key') && data['field_key'] === field_key){
    return data
  }

  if(data.hasOwnProperty('entities')){
    let entities = Object.values(data['entities']);
    // console.log("has propery", entities);
    let entity;
    for(let i = 0; i < entities.length; i++){
      entity = getEntity(entities[i], field_key);
      if(typeof entity === 'object' && entity !== undefined){
        break
      }
    }
    return entity;
  } else if (Object.values(data).filter((item) => typeof item === 'object' && item !== null).length){
    let entities = Object.values(data).filter((item) => typeof item === 'object' && item !== null);
    let entity;
    for(let i = 0; i < entities.length; i++){
      entity = getEntity(entities[i], field_key);
      if(typeof entity === 'object' && entity !== undefined){
        break
      }
    }
    return entity;
  }
}


function findEntityFromSection(section, entity_key) {
  debugger
  return Object.values(section.entities).filter((item) => item.field_key === entity_key)[0];
}

function funcUpdateDependencies(value, entities){
  entities.forEach((dependent_item) => {
    let section_name = dependent_item.entity_section;
    let section = Object.assign([], this.state[section_name]);
    let item = findEntityFromSection(section, dependent_item.entity_key);

    if(dependent_item.controlling_choice_ids && dependent_item.controlling_choice_ids.length && dependent_item.controlling_choice_ids.indexOf(value)){
      // Backup behaviour if not present
      if(item.original_behaviour && Object.keys(item.original_behaviour).length){
        // Do nothing?
      } else {
        item.original_behaviour = Object.assign({}, {editable: item.editable, required: item.required, active: item.active, visible: item.visible})
      }
      Object.assign(item, dependent_item.behaviour);

      if(item.field_type === "dropdown"){
        // Set scoped values
        if(item.original_choices && item.original_choices.length){
          // Do nothing
        } else {
          // Make a copy of original choices
          item.original_choices = (item.choices && item.choices.choices && item.choices.choices.length) || [];
        }

        let choices = item.choices && item.choices.choices && item.choices.choices.length ? item.choices.choices : [];
        item.choices.choices = choices.filter(item => dependent_item.dependent_choices.indexOf(item.id) > -1);
      }

    } else {
      // Restore original choices && Behaviour
      Object.assign(item, item.original_behaviour);
      if(item.field_type === "dropdown" && item.original_choices && item.original_choices.length){
        item.choices.choices = Object.assign([], item.original_choices);
      }
    }

    this.setState({section_name: section})
  });
}


export default Reindeer;