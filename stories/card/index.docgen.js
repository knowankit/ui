export default Component => {
  Component.__docgenInfo = {
    props: {
      actions: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'The action list, shows at the bottom of the Card'
      },
      bordered: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Toggles rendering of the border around the card',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      hoverable: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Lift up when hovering card',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      loading: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Shows a loading indicator while the contents of the card are being fetched',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      title: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Card title'
      },
      type: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'inner'
            }
          ]
        },
        required: false,
        description: 'Card style type, can be set to inner or not set'
      },
      onTabChange: {
        type: {
          name: 'function'
        },
        required: false,
        description: 'Callback when tab is switched'
      },
      size: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'default'
            },
            {
              value: 'small'
            }
          ]
        },
        required: false,
        description: 'Size of card',
        defaultValue: {
          value: 'default',
          computed: false
        }
      },
      defaultActiveTabKey: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Initial active TabPane`s key, if activeTabKey is not set'
      },
      activeTabKey: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Current TabPane`s key'
      },
      tabList: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'List of TabPane`s head'
      }
    },
    description: 'Card component'
  }
}
