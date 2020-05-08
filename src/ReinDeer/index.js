import React from 'react';

import COMPONENTS_MASTER from "./ComponentsMaster";



function Reindeer(props){
  let items = Object.values(props.config.entities).sort((a, b) => a.position - b.position).filter((item) => item.visible);
  debugger
  return(
    <>
      {items.map((item) => {
        let field_type = item.field_type;
        // Correct! JSX type can be a capitalized variable.
        debugger
        let FormComponent = COMPONENTS_MASTER[field_type] || COMPONENTS_MASTER['text'];

        return(
          <FormComponent config={item} onChange={props.onChange}/>
        )
      })}
    </>
  )
}

//
function updateData(section_name, key, value, event) {
  let section = Object.assign([], this.state[section_name]);
  let item = findEntityFromSection(section, key);
  item.value = value;

  this.setState({section_name: section}, () => {
    if(item.dependent_entities && item.dependent_entities.length){
      // const updateDependencies = ;
      // updateDependencies(item.dependent_entities);
      funcUpdateDependencies.bind(this)(value, item.dependent_entities)
    }
  });
}

function findEntityFromSection(section, entity_key) {
  return section.filter((item) => item.field_key === entity_key)[0];
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

// WIP
// function FormGroup(props){
//   const [config, setConfig] = useState(props.config);
//   let field_type = config.field_type;
//   return(
//     <div className='form-group' style={{width: 250, display: 'inline-block', marginRight: 20, marginBottom: 10}}>
//       <label htmlFor="">{config.label}</label>
//
//     </div>
//   )
// }







export default Reindeer;