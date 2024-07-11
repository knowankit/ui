export default Component => {
  Component.__docgenInfo = {
    props: {
      count: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'number to show in badge',
        defaultValue: {
          value: '3',
          computed: false
        }
      },
      dot: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether to display a red dot instead of count',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      color: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'customize Badge dot color'
      },
      overflowCount: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'max count to show'
      },
      showZero: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether to show badge when count is zero',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      text: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'if status is set, text sets the display text of the status dot',
        defaultValue: {
          value: '',
          computed: false
        }
      },
      title: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'text to show when hovering over the badge',
        defaultValue: {
          value: 'count',
          computed: false
        }
      },
      status: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'success'
            },
            {
              value: 'processing'
            },
            {
              value: 'default'
            },
            {
              value: 'error'
            },
            {
              value: 'warning'
            }
          ]
        },
        required: false,
        description: 'set Badge as a status dot',
        defaultValue: {
          value: '',
          computed: false
        }
      }
    },
    description: 'Badge'
  }
}
