import React from "react";
import Reindeer from "../index";

function FCard(props){
  return(
    <>
      <div style={{border: "1px solid red"}}>
        <Reindeer config={props.config} parent_context={props.parent_context} />
      </div>
    </>
  )
}

export default FCard;