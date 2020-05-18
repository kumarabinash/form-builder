/**
 * Renders a table with given config, handle columns,
 *   Finds any computation logic found in config
 *   Computes & Updates new value
 *
 * @author: kumar.abinash@finly.io
 * @todo
 *   - Handle Array Data Updation
 * @returns {boolean} - success as true or false
 */



import React from "react";
import {Reindeer} from "../index";

import {Table} from 'antd';

function FTable(props){
  // console.log("Rendering  Table");
  // let table_headers = Object.values(props.config.entities).map((item) => item.label);
  let config_entities = Object.values(props.config.entities);
  // debugger
  let columns = config_entities.map((item, key) => {
    item.table_view = true;
    let render_item = {entities: {}};
    render_item.entities[`${item.entity_key}`] = item;

    // debugger;

    return(
      {
        title: item.label,
        dataIndex: item.entity_key,
        key: item.entity_key,
        fixed: ((key === 0) ? 'left' : ((config_entities.length - 1) === key) ? 'right' : null),
        width: 250,
        render: () => <Reindeer config={render_item} parent_context={props.parent_context} table_layout={true} key={key}/>
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