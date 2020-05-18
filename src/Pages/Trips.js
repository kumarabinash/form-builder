import React, { Component } from 'react';
import Reindeer from "../ReinDeer";

import {Col, Row} from "antd";

class Trips extends Component{
  constructor(props) {
    super(props);

    this.state = {
      reindeer: {
        config: {},
        dependencies: {},
        computations: {},
        validation: {},
        conditions: {},
        data: {},
      },
      config: {...props.config},
      d: {...props.d},
      form_data: {
        vendor_id: null,
        status_id: 1,
        policy_id: null,
        department_id: null,
        legal_name: null,

        calc_rate: null,
        calc_quantity: null,
        total: null,

        bank_accounts: [
          {name: null, account_number: null, ifsc: null}
        ],

        invoice_items: [
          {item: null, }
        ],

      }
    };


  }

  addBankAccount = () => {
    console.log("Will add bank Account");
  };

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

        {/* Calculation */}
        <Row>
          <Col span={16} style={{padding: 20}}>
            {console.log("Calculation Rerendering")}
            <h4>Header</h4>
            <Reindeer config={this.state.config.calculation} section_id={this.state.config.header.section_id} parent_context={this} />
          </Col>
        </Row>


        <hr/>
        {/* Bank Account */}
        <Row>
          <Col span={16} style={{padding: 20}}>
            <h4>Bank Accounts</h4>
            <Reindeer config={this.state.config.bank_accounts} parent_context={this}/>
            <button onClick={(event => this.addBankAccount(event.target))}>Add Bank Account</button>
          </Col>
        </Row>

        {/* Line */}
        <Row>
          <Col span={24} style={{padding: 20}}>
            <h4>Invoice Items(Table)</h4>
            <Reindeer config={this.state.config.invoice_items} parent_context={this}/>
          </Col>
        </Row>
      </>
    );
  }

}

export default Trips;
