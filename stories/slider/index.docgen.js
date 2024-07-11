export default Component => {
  Component.__docgenInfo = {
    props: {
      banner: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to show as banner',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      closable: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether Alert can be closed'
      },
      showIcon: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to show icon',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      closeText: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Close text to show'
      },
      description: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Additional content of Alert'
      },
      message: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Content of Alert'
      },
      type: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'success'
            },
            {
              value: 'info'
            },
            {
              value: 'warning'
            },
            {
              value: 'error'
            }
          ]
        },
        required: false,
        description: 'Type of Alert styles, options: success, info, warning, error',
        defaultValue: {
          value: 'success',
          computed: false
        }
      },
      icon: {
        type: {
          name: 'ReactNode'
        },
        required: false,
        description: 'Custom icon, effective when showIcon is true'
      },
      onClose: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback when Alert is closed'
      },
      afterClose: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Called when close animation is finished'
      }
    },
    description: 'Alert'
  }
}
