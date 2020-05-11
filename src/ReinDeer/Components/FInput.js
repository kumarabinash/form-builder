import React from "react";
import {Input} from "antd";

function FInput(props){
  let item = props.config;

  return(
    <Input
      type="text"
      autoComplete="off"
      className="form-control"
      id="businessName"
      value={props.config.value}
      readOnly={!props.config.editable}
      onChange={(ev) => {props.onChange("header", item.field_key, ev.target.value, ev);}}
      maxLength={props.config.options && props.config.options.char_limit}
      placeholder={props.config.placeholder}
      disabled={!props.config.active}
    />
  )

}

export default FInput;