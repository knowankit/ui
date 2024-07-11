export default Component => {
  Component.__docgenInfo = {
    props: {
      disabled: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether the dropdown menu is disabled'
      },
      trigger: {
        type: {
          name: 'array',
          value: [
            {
              value: ['hover']
            },
            {
              value: ['click']
            }
          ]
        },
        required: false,
        description: 'the trigger mode which executes the drop-down action, hover doesn`t work on mobile device',
        defaultValue: {
          value: ['hover'],
          computed: false
        }
      },
      visible: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether the dropdown menu is visible'
      },
      placement: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'bottomLeft'
            },
            {
              value: 'bottomCenter'
            },
            {
              value: 'bottomRight'
            },
            {
              value: 'topLeft'
            },
            {
              value: 'topCenter'
            },
            {
              value: 'topRight'
            }
          ]
        },
        required: false,
        description: 'can be set to circle or omitted',
        defaultValue: {
          value: 'bottomLeft',
          computed: false
        }
      },
      overlay: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'the dropdown menu'
      },
      overlayClassName: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Class name of the dropdown root element'
      },
      overlayStyle: {
        type: {
          name: 'object'
        },
        required: false,
        description: 'Style of the dropdown root element'
      },
      onVisibleChange: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'a callback function takes an argument: visible, is executed when the visible state is changed'
      },
      onClick: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'a callback function, the same as Button, which will be executed when you click the button on the left'
      }
    },
    description: 'Dropdown Component'
  }
}
