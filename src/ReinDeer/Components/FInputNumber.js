import React from "react";
import {InputNumber} from "antd";

function FInputNumber(props){
  let item = item;
  return(
    <InputNumber
      type="text"
      style={{width: 250}}
      autoComplete="off"
      className="form-control"
      id="businessName"
      onChange={(value, event) =>
        props.onChange('passengers', item.entity_key, value, event)
      }
      value={item.value}
      readOnly={!item.editable}
      max={item.options && item.options.max ? item.options.maximum : null}
      min={item.options && item.options.minimum ? item.options.minimum : null}
      placeholder={item.placeholder}
      disabled={!item.active}
    />
  )
}

export default FInputNumber;
