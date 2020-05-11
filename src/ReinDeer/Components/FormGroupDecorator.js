import React from "react";
import {Tooltip, Typography} from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';

const { Text } = Typography;

function FormGroupDecorator(props){
  const decoratable_el_types = [
    "text", "auto_number", "dropdown", "number"
  ];

  let item = props.config;
  let Component = props.component;

  if(decoratable_el_types.indexOf(item.field_type) > -1 && !props.table_layout){
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

          <Component
            config={item}
            onChange={props.onChange}
            parent_context={props.parent_context}
          />

        </label>

      </div>
    )
  }
  return(
    <Component
      config={item}
      onChange={props.onChange}
      parent_context={props.parent_context}
    />
  )
}

export default FormGroupDecorator;