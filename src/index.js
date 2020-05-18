import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

var config3 = {
  "header": {
    "section_id": "header",
    "title": "Vendor Details",
    "entities": {
      "vendor_id": {
        "section_id": "header",
        "entity_key": "vendor_id",
        "path": "header/entities/vendor_id",
        "label": "Vendor",
        "placeholder": "Enter value",
        "hint": "Select option",
        "field_type": "auto_number",
        "default_value": null,
        "value": "",
        "width": "standard",
        "behaviour": {
          "editable": true,
          "required": true,
          "active": true,
          "visible": true,
        },
        "unique": false,
        "position": 0,
        "custom_field": false,
        "options": {
          "sequence": {
            "prefix": "VNDR/",
            "start_at": "000001"
          }
        }
      },
      "status_id": {
        "id": "B7BA674E-9038-11EA-950D-8C8590BE5FB3",
        "section_id": "header",
        "entity_key": "status_id",
        "path": "header/entities/status_id",
        "label": "Status",
        "placeholder": "Enter value",
        "hint": "Select value",
        "field_type": "dropdown",
        "default_value": "1",
        "value": "",
        "width": "standard",
        "behaviour": {
          "editable": true,
          "required": true,
          "active": true,
          "visible": true,
        },
        "unique": false,
        "position": 1,
        "custom_field": false,
        "options": {},
        "choices": {
          "type": "enum",
          "config": {
            "enum": "VendorStatus",
            "id": "id",
            "name": "name"
          },
          "choices": [
            {"id": 1, name: "Open"},
            {"id": 2, name: "Processing"},
            {"id": 3, name: "Retracted"},
            {"id": 4, name: "Rejected"},
            {"id": 5, name: "Approved"},
            {"id": 6, name: "Closed"},
          ]
        }
      },
      "policy_id": {
        "id": "B7BB9434-9038-11EA-950D-8C8590BE5FB3",
        "section_id": "header",
        "entity_key": "policy_id",
        "path": "header/entities/policy_id",
        "label": "Policy",
        "placeholder": "Enter value",
        "hint": "Select value",
        "field_type": "dropdown",
        "default_value": null,
        "value": "",
        "width": "standard",
        "behaviour": {
          "editable": true,
          "required": true,
          "active": true,
          "visible": true,
        },
        "unique": false,
        "position": 2,
        "custom_field": false,
        "options": {},
        "choices": {
          "type": "lookup",
          "config": {
            "route": "policies",
            "choice_params": {
              "permissions": [
                "vendor_creator",
                "vendor_manager"
              ]
            }
          },
          "choices": [
            {"id": 1, "name": "India"},
            {"id": 2, "name": "Bangalore"},
            {"id": 3, "name": "Mumbai"},
          ]
        }
      },
      "department_id": {
        "id": "B7BB9434-9038-11EA-950D-8C8590BE5FB3",
        "section_id": "header",
        "entity_key": "department_id",
        "path": "header/entities/department_id",
        "label": "Department",
        "placeholder": "Enter value",
        "hint": "Select value",
        "field_type": "dropdown",
        "default_value": null,
        "value": "",
        "width": "standard",
        "behaviour": {
          "editable": true,
          "required": true,
          "active": true,
          "visible": true,
        },
        "unique": false,
        "position": 3,
        "custom_field": false,
        "options": {},
        "choices": {
          "type": "lookup",
          "config": {
            "route": "policies",
            "choice_params": {
              "permissions": [
                "vendor_creator",
                "vendor_manager"
              ]
            }
          },
          "choices": [
            {"id": 1, "name": "Marketing"},
            {"id": 2, "name": "Tech"},
            {"id": 3, "name": "Sales"},
            {"id": 4, "name": "Customer Success"},
            {"id": 5, "name": "Business Development"},
          ]
        }
      },
      "legal_name": {
        "id": "B7BD9CDE-9038-11EA-950D-8C8590BE5FB3",
        "section_id": "header",
        "entity_key": "legal_name",
        "path": "header/entities/legal_name",
        "label": "Legal name",
        "placeholder": "Enter value",
        "hint": "Enter value",
        "field_type": "text",
        "default_value": null,
        "value": "",
        "width": "standard",
        "behaviour": {
          "editable": true,
          "required": true,
          "active": true,
          "visible": true,
        },
        "unique": false,
        "position": 4,
        "custom_field": false,
        "options": {
          "char_limit": 255
        }
      }
    }
  },

  "calculation": {
    "section_id": "calculation",
    "title": "Calculation Test",
    "entities": {
      "calc_rate": {
        "id": "B7B74A50-9038-11EA-950D-8C8590BE5FB3",
        "section_id": "calculation",
        "entity_key": "calc_rate",
        "path": "header/entities/vendor_id",
        "label": "Rate",
        "placeholder": "Enter value",
        "hint": "Rate",
        "field_type": "text",
        "default_value": null,
        "value": "",
        "width": "standard",
        "behaviour": {
          "editable": true,
          "required": true,
          "active": true,
          "visible": true,
        },
        "unique": false,
        "position": 0,
        "custom_field": false
      },
      "calc_quantity": {
        "id": "B7BA674E-9038-11EA-950D-8C8590BE5FB3",
        "section_id": "calculation",
        "entity_key": "calc_quantity",
        "path": "calculation/entities/calc_quantity",
        "label": "Quantity",
        "placeholder": "Enter value",
        "hint": "Select value",
        "field_type": "text",
        "default_value": null,
        "value": "",
        "width": "standard",
        "behaviour": {
          "editable": true,
          "required": true,
          "active": true,
          "visible": true,
        },
        "unique": false,
        "position": 1,
        "custom_field": false,
      },
      "total": {
        "id": "B7BB9434-9038-11EA-950D-8C8590BE5FB3",
        "section_id": "calculation",
        "entity_key": "total",
        "path": "calculation/entities/total",
        "label": "Total",
        "placeholder": "Auto Calculated Value",
        "hint": "Select value",
        "field_type": "text",
        "default_value": null,
        "value": "",
        "width": "standard",
        "behaviour": {
          "editable": false,
          "required": true,
          "active": true,
          "visible": true,
        },
        "unique": false,
        "position": 2,
        "custom_field": false
      }
    }
  },
  "bank_accounts": {
    "section_id": "bank_accounts",
    "title": "Bank Accounts",
    "entities": {
      "bank_account": {
        "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB4",
        "entity_key": "locations",
        "label": "Locations",
        "placeholder": "Enter value",
        "hint": null,
        "field_type": "card",
        "default_value": null,
        "value": "",
        "width": "standard",
        "behaviour": {
          "editable": true,
          "required": true,
          "active": true,
          "visible": true,
        },
        "unique": false,
        "position": 0,
        "custom_field": false,
        "options": {
          "min_items": 1
        },
        "entities": {
          "name": {
            "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB5",
            "entity_key": "account_name",
            "label": "Account Name",
            "placeholder": "Enter value",
            "hint": null,
            "field_type": "text",
            "default_value": null,
            "value": "",
            "width": "standard",
            "behaviour": {
              "editable": true,
              "required": true,
              "active": true,
              "visible": true,
            },
            "unique": false,
            "position": 0,
            "custom_field": false,
            "options": {
              "min_items": 1
            }
          },
          "account_number": {
            "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB6",
            "entity_key": "account_number",
            "label": "Account Number",
            "placeholder": "Enter value",
            "hint": null,
            "field_type": "text",
            "default_value": null,
            "value": "",
            "width": "standard",
            "behaviour": {
              "editable": true,
              "required": true,
              "active": true,
              "visible": true,
            },
            "unique": false,
            "position": 0,
            "custom_field": false,
            "options": {
              "min_items": 1
            }
          },
          "ifsc": {
            "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB7",
            "entity_key": "ifsc",
            "label": "IFSC",
            "placeholder": "Enter value",
            "hint": null,
            "field_type": "text",
            "default_value": null,
            "value": "",
            "width": "standard",
            "behaviour": {
              "editable": true,
              "required": true,
              "active": true,
              "visible": true,
            },
            "unique": false,
            "position": 0,
            "custom_field": false,
            "options": {
              "min_items": 1
            }
          }
        }
      }
    }
  },

  "invoice_items": {
    "section_id": "invoice_items",
    "title": "Invoice Line Items",
    "entities": {
      "line_items": {
        "id": "B7C157D4-9038-11EA-950D-8C8590BE28393",
        "entity_key": "line_items",
        "label": "Line Items",
        "field_type": "table",
        "behaviour": {
          "editable": false,
          "visible": true,
        },
        "entities": {
          "item_master_item_id": {
            "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB7",
            "entity_key": "item_master_item_id",
            "label": "Item",
            "placeholder": "Enter value",
            "hint": null,
            "field_type": "text",
            "default_value": null,
            "value": "123",
            "width": "standard",
            "behaviour": {
              "editable": true,
              "required": true,
              "active": true,
              "visible": true,
            },
            "unique": false,
            "position": 0,
            "custom_field": false,
            "options": {
              "min_items": 1
            }
          },
          "rate": {
            "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB7",
            "entity_key": "rate",
            "label": "Rate",
            "placeholder": "Enter value",
            "hint": null,
            "field_type": "text",
            "default_value": null,
            "value": "123",
            "width": "standard",
            "behaviour": {
              "editable": true,
              "required": true,
              "active": true,
              "visible": true,
            },
            "unique": false,
            "position": 0,
            "custom_field": false,
            "options": {
              "min_items": 1
            }
          },
          "quantity": {
            "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB7",
            "entity_key": "quantity",
            "label": "Quantity",
            "placeholder": "Enter value",
            "hint": null,
            "field_type": "text",
            "default_value": null,
            "value": "123",
            "width": "standard",
            "behaviour": {
              "editable": true,
              "required": true,
              "active": true,
              "visible": true,
            },
            "unique": false,
            "position": 0,
            "custom_field": false,
            "options": {
              "min_items": 1
            }
          },
          "discount": {
            "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB7",
            "entity_key": "discount",
            "label": "Discount",
            "placeholder": "Enter value",
            "hint": null,
            "field_type": "text",
            "default_value": null,
            "value": "123",
            "width": "standard",
            "behaviour": {
              "editable": true,
              "required": true,
              "active": true,
              "visible": true,
            },
            "unique": false,
            "position": 0,
            "custom_field": false,
            "options": {
              "min_items": 1
            }
          },
          "tax_rate": {
            "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB7",
            "entity_key": "tax_rate",
            "label": "Tax Rate",
            "placeholder": "Enter value",
            "hint": null,
            "field_type": "dropdown",
            "default_value": null,
            "value": "123",
            "width": "standard",
            "behaviour": {
              "editable": true,
              "required": true,
              "active": true,
              "visible": true,
            },
            "unique": false,
            "position": 0,
            "custom_field": false,
            "choices": {
              "choices": [
                {"id": 1, "name": "3%"},
                {"id": 2, "name": "5%"},
                {"id": 3, "name": "12%"},
                {"id": 4, "name": "18%"},
              ]
            },
            "options": {
              "min_items": 1
            }
          },
          "tax_value": {
            "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB7",
            "entity_key": "tax_value",
            "label": "Tax Value",
            "placeholder": "Enter value",
            "hint": null,
            "field_type": "text",
            "default_value": null,
            "value": "123",
            "width": "standard",
            "behaviour": {
              "editable": true,
              "required": true,
              "active": true,
              "visible": true,
            },
            "unique": false,
            "position": 0,
            "custom_field": false,
            "options": {
              "min_items": 1
            }
          },
          "tax_type_id": {
            "id": "B7C157D4-9038-11EA-950D-8C8590BE5FB7",
            "entity_key": "tax_type_id",
            "label": "Tax Type",
            "placeholder": "Enter value",
            "hint": null,
            "field_type": "text",
            "default_value": null,
            "value": "123",
            "width": "standard",
            "behaviour": {
              "editable": true,
              "required": true,
              "active": true,
              "visible": true,
            },
            "unique": false,
            "position": 0,
            "custom_field": false,
            "options": {
              "min_items": 1
            }
          }

        },
        "row_configs": [

        ]
      }
    },
  }
};

var configs = {
  "conditions": [
    {
      "reference_type": "entity",
      "section_id": "header",
      "reference_key": "legal_name",
      "entity_path": "header/entities/department_id",
      "rules": [
        {
          "entity_key": "status_id",
          "predicate": "not_in",
          "match_type": "value", //"value", "formula", "entity"
          "match_value": [1, 3, 4],
          "match_formula": "{{}}",
          "match_entity_key": "invoice_date"
        }
      ],
      "actions": [
        {
          "property": "editable",
          "value": false
        }
      ]
    }
  ],
  "validations": [
    {
      "entity_key": "vendor_id",
      "entity_path": "header/entities/vendor_id",
      "section_id": "header",
      "error_message": "Name Can't be X",
      "rules": [
        {
          "entity_key": "vendor_id",
          "predicate": "gteq",
          "match_type": "value",
          "match_value": "X",
          "match_formula": "{{}}",
          "match_entity_key": "budget_value"
        }
      ]
    }
  ],
  "dependencies": [
    {
      "entity_key": "department_id",
      "entity_path": "header/entities/department_id",
      "section_id": "header", //
      "rules": [
        {
          "entity_key": "policy_id",
          "predicate": "eq",
          // "match_type": "value/formula",
          "match_type": "value",
          "match_value": 2,
          "match_formula": "{{}}",
          "choices": {
            "partial": true, // What's this?
            "choices": [ // Changed `values` to `choices`
              {"id": 2, "name": "Tech"},
              {"id": 4, "name": "Customer Success"}
            ]
          }
        },
        {
          "entity_key": "policy_id",
          "predicate": "eq",
          // "match_type": "value/formula",
          "match_type": "value",
          "match_value": 3,
          "match_formula": "{{}}",
          "choices": {
            "partial": true, // What's this?
            "choices": [ // Changed `values` to `choices`
              {"id": 1, "name": "Marketing"},
              {"id": 3, "name": "Sales"},
              {"id": 5, "name": "Business Development"},
            ]
          }
        }
      ]
    }
  ],
  "computations": [
    {
      "entity_key": "total",
      "section_id": "calculation",
      "formula": "{{calc_rate | times: calc_quantity}}",
    }
  ]

};

ReactDOM.render(
  <React.StrictMode>
    {/* eslint-disable-next-line no-use-before-define */}
    <App config={config3} d={configs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

