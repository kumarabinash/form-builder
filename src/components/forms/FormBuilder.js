import React, { Component } from 'react';
import Section from "./components/Section";

class FormBuilder extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    var sections = this.props && this.props.config && this.props.config.sections;

    return(
      <>
        {
        sections && sections.map((item, index) => {
          return(
            <Section {...item} />
            //you are plotting the whole object. What am i supposed to do?you can only show one string this error o=comes whhen you try to plot either an arry or obj

            // wait let me use the section comoponet
          )
        })
        // this.props.config.sections.map((key, value) => {
        //   <Section config={key} />
        // })
      }
      </>
    );
  }

}

export default FormBuilder;
