import React from 'react';
import Trips from "./Pages/Trips";
import './App.css';
// import {Col, Row} from "antd";
// import {Reindeer, updateData} from "./FormRenderer/Form";

function App(props) {

  // const [config, setConfig] = useState(props.config);

  return (
    <div className="App">
      <Trips config={props.config} d={props.d}/>
    </div>
  );
}

export default App;

























































// <>
//   <Row>
//     <Col span={16} style={{padding: 20}}>
//       <h4>Header</h4>
//       <Reindeer config={this.props.config.header} onChange={updateData.bind(this)}/>
//     </Col>
//   </Row>
// </>
//
