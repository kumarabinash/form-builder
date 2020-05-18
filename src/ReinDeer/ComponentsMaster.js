/**
 * Maps field types to components
 *
 * @author: kumar.abinash@finly.io
 *
 * @returns an object map of
 */

import FInput from "./Components/FInput";
import FInputNumber from "./Components/FInputNumber";
import FDropdown from "./Components/FDropdown";
import FCard from "./Components/FCard";
import FTable from "./Components/FTable";

const COMPONENTS_MASTER = {
  text: FInput,
  auto_number: FInput,
  dropdown: FDropdown,
  number: FInputNumber,
  card: FCard,
  table: FTable,

};

export default COMPONENTS_MASTER;