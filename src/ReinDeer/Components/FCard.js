import React from "react";
import Reindeer from "../index";

function FCard(props){
  return(
    <>
      <div style={{border: "1px solid red"}}>
        <Reindeer config={props.config} />
      </div>
    </>
  )
}

export default FCard;