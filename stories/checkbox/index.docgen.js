export default Component => {
  Component.__docgenInfo = {
    props: {
      autoFocus: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'get focus when component mounted',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      checked: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'can be set to circle or omitted',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      defaultChecked: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Specifies the initial state: whether or not the checkbox is selected',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      disabled: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Disable checkbox',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      indeterminate: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'indeterminate checked state of checkbox',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      onChange: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'The callback function that is triggered when the state changes'
      },
      defaultValue: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'Default selected value',
        defaultValue: {
          value: '[]',
          computed: false
        }
      },
      name: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'The `name` property of all `input[type="checkbox"]` children'
      },
      value: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'Used for setting the currently selected value',
        defaultValue: {
          value: '[]',
          computed: false
        }
      },
      options: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'Specifies options',
        defaultValue: {
          value: '[]',
          computed: false
        }
      }
    },
    description: 'Checkbox Component'
  }
}
