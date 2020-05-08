import React from "react";
import Reindeer from "../index";

import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.css';
import Handsontable from 'handsontable';

function FTable(props){
  let table_headers = Object.values(props.config.entities).map((item) => item.label);

  let data = [];
  data.push(table_headers);

  data.push([1, 2, 4, 9, 12, 19, 20]);


  return(
    <>
      <>
        <h4>TABLE</h4>
        <Reindeer config={props.config} />
        <HotTable data={data} colHeaders={true} rowHeaders={true} width="600" height="300" />

      </>
    </>
  )
}

export default FTable;