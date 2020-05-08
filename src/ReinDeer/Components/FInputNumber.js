import {InputNumber, Tooltip, Typography} from "antd";
import React from "react";
import {InfoCircleOutlined} from '@ant-design/icons';
const { Text } = Typography;

function FInputNumber(props){
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
      <InputNumber
        type="text"
        style={{width: 250}}
        autoComplete="off"
        className="form-control"
        id="businessName"
        onChange={(value, event) =>
          props.onChange('passengers', props.config.field_key, value, event)
        }
        value={props.config.value}
        readOnly={!props.config.editable}
        max={props.config.options && props.config.options.max ? props.config.options.maximum : null}
        min={props.config.options && props.config.options.minimum ? props.config.options.minimum : null}
        placeholder={props.config.placeholder}
        disabled={!props.config.active}
      />
    </div>
  )
}

export default FInputNumber;
