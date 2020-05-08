import {Select, Tooltip, Typography} from "antd";
import React from "react";
import {InfoCircleOutlined} from '@ant-design/icons';
const { Text } = Typography;

function FDropdown(props){
  let choices = (props.config.choices && props.config.choices.choices && props.config.choices.choices.length && props.config.choices.choices) || [];
  let item = props.config;
  return(
    <div className='form-group' style={{width: 250, display: 'inline-block', marginRight: 20, marginBottom: 10}}>
      <label htmlFor="">
        {item.label} {item.required ? <Text type="danger">*</Text> : null}

        {item.hint && item.hint.length ?
          <Tooltip placement="top" title={item.hint}>
            <InfoCircleOutlined style={{float: 'right'}}/>
          </Tooltip>
          :
          null
        }
      </label>
      <Select
        showSearch
        placeholder="Search"
        style={{ width: '250px' }}
        optionFilterProp="children"
        onChange={(value, event) =>
          props.onChange('header', props.config.field_key, value, event)
        }
        value={props.config.value || props.config.default_value}
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
    </div>
  )
}

export default FDropdown;