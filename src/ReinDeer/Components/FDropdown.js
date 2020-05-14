import {Select} from "antd";
import React from "react";

function FDropdown(props){
  let item = props.config;
  let behaviour = Object.assign({}, item.behaviour, item.conditional_behaviour || {});
  let choices = item.choices?.scoped_choices?.length ?
    item.choices?.scoped_choices : item.choices?.choices.length ? item.choices?.choices : [];

  return(
    <Select
      showSearch
      placeholder={item.placeholder}
      style={{ width: '250px' }}
      optionFilterProp="children"
      onChange={(value, event) =>
        props.onChange(item.section_id, item.field_key, value, event)
      }
      value={item.value || item.default_value}
      showArrow={true}
      disabled={!behaviour.editable}
    >
      {choices.map((choice, choice_index) => {
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