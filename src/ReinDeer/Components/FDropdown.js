import {Select} from "antd";
import React from "react";

function FDropdown(props){
  let item = props.config;
  let choices = (item.choices && props.config.choices.choices && props.config.choices.choices.length && props.config.choices.choices) || [];
  return(
    <Select
      showSearch
      placeholder="Search"
      style={{ width: '250px' }}
      optionFilterProp="children"
      onChange={(value, event) =>
        props.onChange('header', item.field_key, value, event)
      }
      value={item.value || item.default_value}
      showArrow={true}
    >
      {choices.map((choice) => {
        return(
          <Select.Option value={choice.id}>
            {choice.name}
          </Select.Option>
        )
      })}
    </Select>
  )
}

export default FDropdown;