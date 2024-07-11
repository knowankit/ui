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
        description: 'Specifies whether the radio is selected'
      },
      defaultChecked: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Specifies the initial state: whether or not the radio is selected',
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
        description: 'Disable radio',
        defaultValue: {
          value: 'false',
          computed: false
        }
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
        description: 'The name property of all input[type="radio"] children'
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
        description: 'set children optional',
        defaultValue: {
          value: '[]',
          computed: false
        }
      },
      size: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'size for radio button style',
        defaultValue: {
          value: 'default',
          computed: false
        }
      },
      buttonStyle: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'style type of radio button',
        defaultValue: {
          value: 'outline',
          computed: false
        }
      },
      onChange: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'The callback function that is triggered when the state changes'
      }
    },
    description: 'Radio Component'
  }
}
