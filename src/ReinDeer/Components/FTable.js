import React from "react";
import Reindeer from "../index";
import COMPONENTS_MASTER from "../ComponentsMaster";

import {Table, Input} from 'antd';

function FTable(props){
  // let table_headers = Object.values(props.config.entities).map((item) => item.label);
  let config_entities = Object.values(props.config.entities);
  let columns = config_entities.map((item, key) => {
    item.table_view = true;
    let render_item = {entities: {}};
    render_item.entities[`${item.field_key}`] = item;

    return(
      {
        title: item.label,
        dataIndex: item.field_key,
        key: item.field_key,
        fixed: ((key === 0) ? 'left' : ((config_entities.length - 1) === key) ? 'right' : null),
        width: 250,
        render: () => <Reindeer config={render_item} parent_context={props.parent_context} table_layout={true} />
      }
    )
  });

  columns.unshift({
    title: "#",
    dataIndex: "item_index",
    key: "item_index",
    fixed: 'left',
    width: 40
  });

  const data = [
    {
      item_index: 1,
      item_master_item: '1',
      line_item_rate: 'John Brown',
      line_item_qty: 32,
      line_item_discount: 'New York Park',
      line_item_tax_rate: 'New York Park',
      line_item_tax_value: 'New York Park',
      line_item_tax_type: 'New York Park',
    },
    {
      item_index: 2 ,
      item_master_item: '1',
      line_item_rate: 'John Brown',
      line_item_qty: 32,
      line_item_discount: 'New York Park',
      line_item_tax_rate: 'New York Park',
      line_item_tax_value: 'New York Park',
      line_item_tax_type: 'New York Park',
    },
  ];

  return(
    <>
      <Table
        columns={columns}
        size="small"
        dataSource={data}
        width={100}
        scroll={{ x: 10 }}
        style={{width: "100%"}}/>

    </>
  )
}

export default FTable;