import React, {useState} from 'react';
import FormBuilder from "./components/forms/FormBuilder";
import './App.css';





function App(props) {

  const [config, setConfig] = useState(props.config);

  return (
    <div className="App">
      <FormBuilder config={config} />
    </div>
  );
}

export default App;
