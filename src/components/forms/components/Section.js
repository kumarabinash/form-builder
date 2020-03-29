import React, { Component } from 'react';
import {Col, Row, Input, InputNumber} from "antd";

class Section extends Component{
  constructor(props) {
    super(props);
  }

  renderItems = (items) => {
  let item_components = <>
      {items && items.length && items.map((item, key) => {
        this.customComponent(item);
      })}
    </>;
    debugger
    return item_components;
  };

  customComponent = (data) => {
    const components = {
      input: Input,
      inputNumber: InputNumber
    };
    // Correct! JSX type can be a capitalized variable.
    let FormComponent = components[data.type];
    return <FormComponent {...data} />;
  };

  section_content = (width) => {
    return(
      <Col span={width}>
        {typeof this.props.name !== 'undefined' || this.props.name !== "" ?
          <Row>
            <Col span={24}>
              <header>
                {this.props.name}
              </header>
            </Col>
          </Row>
          :
          null
        }
        {
          this.props.sections && this.props.sections.length ?
            <Row>
              {this.props.sections.map((item, key) => {
                return(
                  <Section {...item} />
                )
              })}
            </Row>
            :
            this.renderItems(this.props.items)
        }
      </Col>
    );
  };

  render() {
    let width = this.props.width && typeof this.props.width !== 'undefined' ? parseInt(this.props.width) : 24;

    return(
      <>
        {
          width === 24 ?
            <Row>
              {this.section_content(width)}
            </Row>
            :
            <>
              {this.section_content(width)}
            </>
        }
      </>
    )
  }

}
export default Section;