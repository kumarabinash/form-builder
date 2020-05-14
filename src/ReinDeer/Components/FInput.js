import React from "react";
import {Input} from "antd";

function FInput(props){
  let item = props.config;
  let behaviour = Object.assign({}, item.behaviour, item.conditional_behaviour || {});
  return(
    <Input
      type="text"
      autoComplete="off"
      className="form-control"
      id={`${item.section_id}-{item.field_key`}
      value={item.value || item.default_value}
      readOnly={!behaviour.editable}
      onChange={(ev) => {
        props.onChange(item.section_id, item.field_key, ev.target.value, ev)
      }}
      maxLength={item.options && item.options.char_limit}
      placeholder={item.placeholder}
      disabled={!behaviour.active}
    />
  )

}

export default FInput;