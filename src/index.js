import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

var config = {
  sections: [
    {
      id: 1,
      name: "Details",
      width: "24",
      sections: [
        {
          id: 2,
          name: "Vendor Details",
          width: "16",
          items: [
            {
              id: 1,
              label: "Vendor Name",
              type: "input",
            }
          ]

        },
        {id: 3, name: "Approval Matrix", width: "8"}
      ]


    },

    {id: 3, parent_id: 2, name: "GST Details", width: 8},
    {id: 4, parent_id: 2, name: "Approval Matrix", width: 4}
  ],
  fields: [
    {
      id: 1, section_id: 1,
      label: "Name",
      type: "text",
      display: "inline"
    },
    {
      id: 2, section_id: 3,
      label: "Tax Rate",
      type: "dropdown",
      values: [
        {label: "18 %", value: 1},
        {label: "12 %", value: 2}
      ],
      display: "inline"
    }
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <App config={config}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
