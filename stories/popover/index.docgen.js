export default Component => {
  Component.__docgenInfo = {
    props: {
      content: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Content of the card'
      },
      title: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Title of the card'
      },
      trigger: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Type of trigger to be used to display popover, supports `hover`, `focus` and `click`'
      },
      placement: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'top'
            },
            {
              value: 'topLeft'
            },
            {
              value: 'topRight'
            },
            {
              value: 'left'
            },
            {
              value: 'leftTop'
            },
            {
              value: 'leftBottom'
            },
            {
              value: 'right'
            },
            {
              value: 'rightTop'
            },
            {
              value: 'rightBottom'
            },
            {
              value: 'bottom'
            },
            {
              value: 'bottomLeft'
            },
            {
              value: 'bottomRight'
            }
          ]
        },
        required: false,
        description: 'Placing/displaying the popover content, supports `top`, `topLeft`, `topRight`, `left`, `leftTop`, `leftBottom`, `right`, `rightTop`, `rightBottom`, `bottom`, `bottomLeft` and `bottomRight`'
      },
      okText: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'text of the Confirm button',
        defaultValue: {
          value: 'OK',
          computed: false
        }
      },
      cancelText: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'text of the Cancel button',
        defaultValue: {
          value: 'Cancel',
          computed: false
        }
      },
      okType: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Button type of the Confirm button',
        defaultValue: {
          value: 'primary',
          computed: false
        }
      },
      onCancel: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'callback of cancel'
      },
      onConfirm: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'callback of confirmation'
      },
      disabled: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'is show popconfirm when click its childrenNode',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      icon: {
        type: {
          name: 'ReactNode'
        },
        required: false,
        description: 'customize icon of confirmation'
      }
    },
    description: 'Popover Component'
  }
}
