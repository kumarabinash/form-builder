import getEntity from "./getEntity";
import dependenciesHandler from "./dependenciesHandler";
import conditionalHandler from "./conditionalHandler";
import validationHandler from "./validationHandler";

export default function updateState(section_name, key, value, event) {
  let section = Object.assign([], this.state.config[section_name]);
  let item = getEntity(section, key);
  item.value = value;

  this.setState({section_name: section}, () => {
    if(item.field_type === "text"){

      // Run Validation
      validationHandler.bind(this)();

    } else {
      // Run Validation
      validationHandler.bind(this)();

      // Update Dependencies
      dependenciesHandler.bind(this)();

      // Update Conditions
      conditionalHandler.bind(this)();
    }

  });
}