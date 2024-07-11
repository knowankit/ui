export default Component => {
  Component.__docgenInfo = {
    props: {
      activeKey: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Key of the active panel'
      },
      defaultActiveKey: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'Key of the initial active panel'
      },
      bordered: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Toggles rendering of the border around the collapse block',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      expandIconPosition: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Set expand icon position: left, right',
        defaultValue: {
          value: 'left',
          computed: false
        }
      },
      onChange: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function executed when active panel is changed'
      },
      disabled: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'If true, panel cannot be opened or closed',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      forceRender: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Forced render of content on panel, instead of lazy rending after clicking on header',
        defaultValue: {
          value: 'false',
          computed: false
        }
      }
    },
    description: 'Collapse Component'
  }
}
