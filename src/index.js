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

var config = {
  "header": [
    {
      "id": "A9876E28-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "trip_id",
      "label": "Trip",
      "placeholder": "Enter value",
      "hint": "Select option",
      "field_type": "auto_number",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 1,
      "custom_field": false,
      "options": {
        "sequence": {
          "prefix": "TRF/{{\"now\" | date: \"%y-%m\" }}/",
          "start_at": "000001"
        }
      }
    },
    {
      "id": "A98A5CB4-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "created_by",
      "label": "Created by",
      "placeholder": "Enter value",
      "hint": "Select value",
      "field_type": "text",
      "default_value": null,
      "editable": false,
      "value": "Kumar Abinash",
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "A98CD728-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "company",
      "label": "Company",
      "placeholder": "Enter value",
      "hint": "Select value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 2,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "A994F07A-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "trip_type_id",
      "label": "Trip type",
      "placeholder": "Enter value",
      "hint": "Select value",
      "field_type": "dropdown",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 3,
      "custom_field": false,
      "options": {},
      "choices": {
        "partial": false,
        "choices": [
          {
            "id": 1,
            "name": "one_way"
          },
          {
            "id": 2,
            "name": "round_trip"
          },
          {
            "id": 3,
            "name": "multi_city"
          }
        ]
      }
    },
    {
      "id": "A997FA0E-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "policy_id",
      "label": "Policy",
      "placeholder": "Enter value",
      "hint": "Select A Policy",
      "field_type": "dropdown",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 4,
      "custom_field": false,
      "options": {},
      "choices": {
        "partial": false,
        "choices": [
          {
            "id": 220,
            "name": "Marketing b2b"
          },
          {
            "id": 310,
            "name": "vp 3"
          }
        ]
      },
      "dependent_entities": [
        {
          "entity_id": "156A9674-5FC0-11EA-9D84-F40F242E84FD",
          "entity_key": "purpose",
          "entity_section": "header",
          "behaviour": {
            "editable": true,
            "required": true,
            "active": false,
            "visible": true
          },
          "controlling_choice_ids": [220],
          "has_dependent_choices": true,
          "lazy_load_dependent_choices": false,
          "dependent_choices": [
            "156B67B6-5FC0-11EA-9D84-F40F242E84FD"
          ]
        },
        {
          "entity_id": "156A9674-5FC0-11EA-9D84-F40F242E84FD",
          "entity_key": "status_id",
          "entity_section": "header",
          "behaviour": {
            "editable": true,
            "required": true,
            "active": false,
            "visible": true
          },
          "controlling_choice_ids": [220],
          "has_dependent_choices": true,
          "lazy_load_dependent_choices": false,
          "dependent_choices": [
            2, 3, 4, 5, 6
          ]
        },
        {
          "entity_id": "156A9674-5FC0-11EA-9D84-F40F242E84FD",
          "entity_key": "start_date",
          "entity_section": "header",
          "behaviour": {
            "editable": true,
            "required": true,
            "active": false,
            "visible": false
          },
          "controlling_choice_ids": [310],
          "has_dependent_choices": true,
          "lazy_load_dependent_choices": false,
          "dependent_choices": [
            "156B67B6-5FC0-11EA-9D84-F40F242E84FD"
          ]
        }
      ]
    },
    {
      "id": "A98ED654-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "status_id",
      "label": "Status",
      "placeholder": "Enter value",
      "hint": "Select value",
      "field_type": "dropdown",
      "default_value": "1",
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 5,
      "custom_field": false,
      "options": {},
      "choices": {
        "partial": false,
        "choices": [

          {
            "id": 2,
            "name": "processing"
          },
          {
            "id": 3,
            "name": "retracted"
          },
          {
            "id": 4,
            "name": "rejected"
          },
          {
            "id": 5,
            "name": "booking_confirmed"
          },
          {
            "id": 6,
            "name": "cancelled"
          },
          {
            "id": 7,
            "name": "booking_pending"
          },
          {
            "id": 8,
            "name": "completed"
          },
          {
            "id": 9,
            "name": "approved"
          },
          {
            "id": 10,
            "name": "auto_approved"
          }
        ]
      }
    },
    {
      "id": "A9A6BC9C-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "start_date",
      "label": "Start date",
      "placeholder": "Enter value",
      "hint": "Select date and time",
      "field_type": "datetime",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 6,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "A9A900D8-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "end_date",
      "label": "End date",
      "placeholder": "Enter value",
      "hint": "Select date and time",
      "field_type": "datetime",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 7,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "A9B45FE6-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "purpose",
      "label": "Purpose /w Char Limit",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 8,
      "custom_field": false,
      "options": {
        "char_limit": 30
      }
    }
  ],
  "passengers": [
    {
      "id": "A9C51FE8-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "passengers",
      "label": "Passengers",
      "placeholder": "Enter value",
      "hint": null,
      "field_type": "number", // collection
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {
        "minimum": 1
      }
    },
    {
      "id": "A9C69FD0-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "name",
      "label": "Name",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    },
    {
      "id": "A9D14DEA-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "contact_number",
      "label": "Contact number",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 1,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    },
    {
      "id": "AA117F50-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "email",
      "label": "Email",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 2,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    }
  ],
  "routes": [
    {
      "id": "AA14CE58-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "routes",
      "label": "Routes",
      "placeholder": "Enter value",
      "hint": null,
      "field_type": "collection",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {
        "minimum": 1
      }
    },
    {
      "id": "AA16B39E-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "from_location",
      "label": "From location",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    },
    {
      "id": "AA1C53EE-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "to_location",
      "label": "To location",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 1,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    },
    {
      "id": "AA1D9DDA-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "depart_on",
      "label": "Depart on",
      "placeholder": "Enter value",
      "hint": "Select date and time",
      "field_type": "datetime",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 2,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AA1FDE7E-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "return_on",
      "label": "Return on",
      "placeholder": "Enter value",
      "hint": "Select date and time",
      "field_type": "datetime",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 3,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AA28E424-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "require_transport",
      "label": "Require transport",
      "placeholder": "Enter value",
      "hint": null,
      "field_type": "checkbox",
      "default_value": "0",
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 4,
      "custom_field": false,
      "options": {},
      "choices": {
        "partial": false,
        "choices": [
          {
            "id": "AA2A40C6-7342-11EA-983A-8C8590BE5FB3",
            "name": "true"
          },
          {
            "id": "AA37C23C-7342-11EA-983A-8C8590BE5FB3",
            "name": "false"
          }
        ]
      }
    },
    {
      "id": "AA3A772A-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "require_hotel",
      "label": "Require hotel",
      "placeholder": "Enter value",
      "hint": null,
      "field_type": "checkbox",
      "default_value": "0",
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 5,
      "custom_field": false,
      "options": {},
      "choices": {
        "partial": false,
        "choices": [
          {
            "id": "AA3AFBDC-7342-11EA-983A-8C8590BE5FB3",
            "name": "true"
          },
          {
            "id": "AA3B907E-7342-11EA-983A-8C8590BE5FB3",
            "name": "false"
          }
        ]
      }
    },
    {
      "id": "AA4B6094-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "require_local_conveyance",
      "label": "Require local conveyance",
      "placeholder": "Enter value",
      "hint": null,
      "field_type": "checkbox",
      "default_value": "0",
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 6,
      "custom_field": false,
      "options": {},
      "choices": {
        "partial": false,
        "choices": [
          {
            "id": "AA4BE884-7342-11EA-983A-8C8590BE5FB3",
            "name": "true"
          },
          {
            "id": "AA52E102-7342-11EA-983A-8C8590BE5FB3",
            "name": "false"
          }
        ]
      }
    }
  ],
  "transport_requests": [
    {
      "id": "AA6E86C8-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "transport_requests",
      "label": "Transport requests",
      "placeholder": "Enter value",
      "hint": null,
      "field_type": "collection",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AA72A550-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "from_location",
      "label": "From location",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    },
    {
      "id": "AA7E8848-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "to_location",
      "label": "To location",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 1,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    },
    {
      "id": "AA81AC26-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "mode",
      "label": "Mode",
      "placeholder": "Enter value",
      "hint": "Select value",
      "field_type": "dropdown",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 2,
      "custom_field": false,
      "options": {},
      "choices": {
        "partial": false,
        "choices": [
          {
            "id": "AA897500-7342-11EA-983A-8C8590BE5FB3",
            "name": "Flight"
          }
        ]
      }
    },
    {
      "id": "AA8B81E2-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "depart_on",
      "label": "Depart on",
      "placeholder": "Enter value",
      "hint": "Select date and time",
      "field_type": "datetime",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 3,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AA8E9D14-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "preferred_timeframe",
      "label": "Preferred timeframe",
      "placeholder": "Enter value",
      "hint": "Select value",
      "field_type": "dropdown",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 4,
      "custom_field": false,
      "options": {},
      "choices": {
        "partial": false,
        "choices": [
          {
            "id": "AA974842-7342-11EA-983A-8C8590BE5FB3",
            "name": "6am to 9am"
          },
          {
            "id": "AA97C97A-7342-11EA-983A-8C8590BE5FB3",
            "name": "9am to 12pm"
          },
          {
            "id": "AA982622-7342-11EA-983A-8C8590BE5FB3",
            "name": "12pm to 3pm"
          },
          {
            "id": "AA987D3E-7342-11EA-983A-8C8590BE5FB3",
            "name": "3pm to 6pm"
          },
          {
            "id": "AA98DA0E-7342-11EA-983A-8C8590BE5FB3",
            "name": "6pm to 9pm"
          },
          {
            "id": "AA993602-7342-11EA-983A-8C8590BE5FB3",
            "name": "9pm to 12am"
          },
          {
            "id": "AA9A67D4-7342-11EA-983A-8C8590BE5FB3",
            "name": "12am to 3am"
          },
          {
            "id": "AA9AD3FE-7342-11EA-983A-8C8590BE5FB3",
            "name": "3am to 6am"
          }
        ]
      }
    },
    {
      "id": "AA9DBFBA-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "budget",
      "label": "Budget",
      "placeholder": "Enter value",
      "hint": "Amount",
      "field_type": "amount",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 5,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AAA46F4A-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "value",
      "label": "Value",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "number",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {
        "decimal": true
      }
    },
    {
      "id": "AAA5769C-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "currency_id",
      "label": "Currency",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "number",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 1,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AAA6BE1C-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "description",
      "label": "Description",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "large_text",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 6,
      "custom_field": false,
      "options": {
        "char_limit": 65535
      }
    }
  ],
  "hotel_requests": [
    {
      "id": "AAB34952-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "hotel_requests",
      "label": "Hotel requests",
      "placeholder": "Enter value",
      "hint": null,
      "field_type": "collection",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AABEC9C6-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "location",
      "label": "Location",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    },
    {
      "id": "AAC1FF42-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "preferred_area",
      "label": "Preferred area",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 1,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    },
    {
      "id": "AAC7AAA0-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "checkin_at",
      "label": "Checkin at",
      "placeholder": "Enter value",
      "hint": "Select date and time",
      "field_type": "datetime",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 2,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AAC8CE08-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "checkout_at",
      "label": "Checkout at",
      "placeholder": "Enter value",
      "hint": "Select date and time",
      "field_type": "datetime",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 3,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AAD1BB4E-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "budget",
      "label": "Budget",
      "placeholder": "Enter value",
      "hint": "Amount",
      "field_type": "amount",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 4,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AAD312D2-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "value",
      "label": "Value",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "number",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {
        "decimal": true
      }
    },
    {
      "id": "AADE0B56-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "currency_id",
      "label": "Currency",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "number",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 1,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AAE56C2A-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "description",
      "label": "Description",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "large_text",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 5,
      "custom_field": false,
      "options": {
        "char_limit": 65535
      }
    }
  ],
  "local_conveyance_requests": [
    {
      "id": "AAEF1C70-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "local_conveyance_requests",
      "label": "Local conveyance requests",
      "placeholder": "Enter value",
      "hint": null,
      "field_type": "collection",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AAF15062-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "location",
      "label": "Location",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    },
    {
      "id": "AAF7AA34-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "pickup_area",
      "label": "Pickup area",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "text",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 1,
      "custom_field": false,
      "options": {
        "char_limit": 255
      }
    },
    {
      "id": "AAF9663A-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "pickup_at",
      "label": "Pickup at",
      "placeholder": "Enter value",
      "hint": "Select date and time",
      "field_type": "datetime",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 2,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AAFB2C4A-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "drop_at",
      "label": "Drop at",
      "placeholder": "Enter value",
      "hint": "Select date and time",
      "field_type": "datetime",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 3,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AB04A018-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "budget",
      "label": "Budget",
      "placeholder": "Enter value",
      "hint": "Amount",
      "field_type": "amount",
      "default_value": null,
      "editable": true,
      "required": true,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 4,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AB05EDE2-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "value",
      "label": "Value",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "number",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 0,
      "custom_field": false,
      "options": {
        "decimal": true
      }
    },
    {
      "id": "AB2E67FE-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "currency_id",
      "label": "Currency",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "number",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 1,
      "custom_field": false,
      "options": {}
    },
    {
      "id": "AB35CDBE-7342-11EA-983A-8C8590BE5FB3",
      "entity_key": "description",
      "label": "Description",
      "placeholder": "Enter value",
      "hint": "Enter value",
      "field_type": "large_text",
      "default_value": null,
      "editable": true,
      "required": false,
      "active": true,
      "visible": true,
      "unique": false,
      "position": 5,
      "custom_field": false,
      "options": {
        "char_limit": 65535
      }
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


























