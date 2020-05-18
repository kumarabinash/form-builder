/**
 * Computation Engine:
 *   Finds any computation logic found in config
 *   Computes & Updates new value
 *
 * @author: kumar.abinash@finly.io
 * @todo
 *   - Handle Array Data Updation
 * @returns {boolean} - success as true or false
 */

import {Liquid} from "liquidjs";
import {updateFormData} from "./updateState";

export default function compute(){
  let computations = this.state.d.computations; // todo - change name d
  let engine = new Liquid();

  let bundle = computations.map((computation, computation_key) => {
    return {
      promise: engine.parseAndRender(computation.formula, this.state.form_data),
      computation: computation
    }

      // .then((result) => {
      //   // updateFormData
      //   //   .bind(this)
      //   //   (computation.entity_key, result)
      //   console.log("Result from promise", result);
      //   bundle.push({result: result, computation: computation});
      // });


  });

  return bundle;


}