export default Component => {
  Component.__docgenInfo = {
    props: {
      allowClear: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'show clear button, effective in multiple mode only.',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      autoFocus: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'get focus when component mounted',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      backfill: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'backfill selected item the input when using keyboard',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      dataSource: {
        type: {
          name: 'array'
        },
        required: true,
        description: 'array of objects to render'
      },
      defaultActiveFirstOption: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether active first option by default',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      disabled: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether disabled select',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      optionLabelProp: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'which prop value of option will render as content of select',
        defaultValue: {
          value: 'children',
          computed: false
        }
      },
      defaultOpen: {
        type: {
          name: 'bool'
        },
        required: true,
        description: 'initial open state of dropdown',
        defaultValue: {
          value: 'true'
        }
      },
      open: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'controlled open state of dropdown',
        defaultValue: {
          value: 'true'
        }
      },
      placeholder: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'can be set to any string or omitted',
        defaultValue: {
          value: 'Auto Complete',
          computed: false
        }
      },
      autoCompleteOnChange: {
        type: {
          name: 'function'
        },
        required: true,
        description: 'Auto Complete onChange callback'
      },
      autoCompleteOnSelect: {
        type: {
          name: 'function'
        },
        required: true,
        description: 'Auto Complete onSelect callback'
      }
    },
    description: 'Auto Complete'
  }
}
