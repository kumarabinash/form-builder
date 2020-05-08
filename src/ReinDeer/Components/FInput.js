import React from "react";
import {Input, Tooltip, Typography} from "antd";

import {InfoCircleOutlined} from '@ant-design/icons';
const { Text } = Typography;

function FInput(props){
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
      <Input
        type="text"
        autoComplete="off"
        className="form-control"
        id="businessName"
        value={props.config.value}
        readOnly={!props.config.editable}
        maxLength={props.config.options && props.config.options.char_limit}
        placeholder={props.config.placeholder}
        disabled={!props.config.active}
      />
    </div>
  )
}

export default FInput;