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
      defaultValue: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'initial value'
      },
      disabled: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'disable the input',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      min: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'min value'
      },
      max: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'max value'
      },
      value: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'current value'
      },
      formatter: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Specifies the format of the value presented'
      },
      onChange: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'The callback triggered when the value is changed'
      },
      onPressEnter: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'The callback function that is triggered when Enter key is pressed'
      },
      size: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'small'
            },
            {
              value: 'default'
            },
            {
              value: 'large'
            }
          ]
        },
        required: false,
        description: 'height of input box',
        defaultValue: {
          value: 'default',
          computed: false
        }
      },
      precision: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'precision of input value'
      },
      decimalSeparator: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'decimal separator'
      },
      step: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'The number to which the current value is increased or decreased. It can be an integer or decimal',
        defaultValue: {
          value: '1',
          computed: false
        }
      }
    },
    description: 'Input'
  }
}
