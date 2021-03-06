/**
 * Renders Component(s) based on given config. Recursively renders nested Component(s) if any
 *
 * @author: kumar.abinash@finly.io
 * @param {object} props - form-entity-config
 * @todo
 *   - Right now it updates the dependencies one after the other in the state, can be combined together to update state at onc
 *   - After rendering run all computations, validations, conditions, dependenciess
 *
 * @returns array of React Components inside a React Fragment
 */

import React from 'react';
import FormGroupDecorator from "./Components/FormGroupDecorator";
import COMPONENTS_MASTER from "./ComponentsMaster";

// Functions
import updateState from "./Helpers/updateState";

function Reindeer(props){
  let parent_context = props.parent_context;
  let items = Object.values(props.config.entities)
    .sort((a, b) => a.position - b.position)
    .filter((item) => item?.conditional_behaviour?.visible || item.behaviour?.visible);

  return(
    <>
      {items.map((item, item_index) => {
        let field_type = item.field_type;

        let FormComponent = COMPONENTS_MASTER[field_type] || COMPONENTS_MASTER['text'];

        return(
          <FormGroupDecorator
            config={item}
            onChange={updateState.bind(parent_context)}
            parent_context={parent_context}
            component={FormComponent}
          />
        )
      })}
    </>
  )
}

export default Reindeer;