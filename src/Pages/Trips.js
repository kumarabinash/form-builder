import React, { Component } from 'react';
// import Section from "../components/Section";

// import {Reindeer, updateData} from "finly-forms";
import Reindeer from "../ReinDeer";

import {Col, Row} from "antd";

class Trips extends Component{
  constructor(props) {
    super(props);

    this.state = {...props};
  }

  render() {
    return(
      <>
        {/* Header */}
        <Row>
          <Col span={16} style={{padding: 20}}>
            <h4>Header</h4>
            <Reindeer config={this.state.config.header} section_id={this.state.config.header.section_id} parent_context={this} />
          </Col>
        </Row>


        <hr/>
        {/* Bank Account */}
        <Row>
          <Col span={16} style={{padding: 20}}>
            <h4>Bank Accounts</h4>
            <Reindeer config={this.state.config.bank_accounts} parent_context={this}/>
          </Col>
        </Row>

        {/* Line */}
        <Row>
          <Col span={24} style={{padding: 20}}>
            <h4>Bank Accounts</h4>
            <Reindeer config={this.state.config.invoice_items} parent_context={this}/>
          </Col>
        </Row>
      </>
    );
  }

}

export default Trips;

// <Row>
//   <Col span={16} style={{padding: 20}}>
//     <h4>Header</h4>
//     <Reindeer config={this.props.config.header} onChange={updateData.bind(this)}/>
//   </Col>
// </Row>
// <Row>
// <Col span={24} style={{padding: 20}}>
// <h4>Passenger Details</h4>
// <Reindeer config={this.props.config.passengers}  onChange={updateData.bind(this)}/>
// </Col>
// </Row>
// <Row>
// <Col span={24} style={{padding: 20}}>
// <h4>Routes</h4>
// <Reindeer config={this.props.config.routes}/>
// </Col>
// </Row>
// <Row>
// <Col span={24} style={{padding: 20}}>
// <h4>Transport Requests</h4>
// <Reindeer config={this.props.config.transport_requests}/>
// </Col>
// </Row>
// <Row>
// <Col span={24} style={{padding: 20}}>
// <h4>Hotel Requests</h4>
// <Reindeer config={this.props.config.hotel_requests}/>
// </Col>
// </Row>
// <Row>
// <Col span={24} style={{padding: 20}}>
// <h4>Local Conveyance Requests</h4>
// <Reindeer config={this.props.config.local_conveyance_requests}/>
// </Col>
// </Row>
