export default Component => {
  Component.__docgenInfo = {
    props: {
      title: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'The text shown in the tooltip'
      },
      arrowPointAtCenter: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether the arrow is pointed at the center of target, supported after antd@1.11+',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      autoAdjustOverflow: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to adjust popup placement automatically when popup is off screen',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      defaultVisible: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether the floating tooltip card is visible by default',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      visible: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether the floating tooltip card is visible or not',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      mouseEnterDelay: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'color of progress bar',
        defaultValue: {
          value: 0.1,
          computed: false
        }
      },
      mouseLeaveDelay: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'color of progress bar',
        defaultValue: {
          value: 0.1,
          computed: false
        }
      },
      trigger: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'hover'
            },
            {
              value: 'focus'
            },
            {
              value: 'click'
            },
            {
              value: 'contextMenu'
            }
          ]
        },
        required: false,
        description: 'Tooltip trigger mode',
        defaultValue: {
          value: 'hover',
          computed: false
        }
      },
      overlayClassName: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Class name of the tooltip card'
      },
      overlayStyle: {
        type: {
          name: 'object'
        },
        required: false,
        description: 'Style of the tooltip card'
      },
      onVisibleChange: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback executed when visibility of the tooltip card is changed'
      },
      align: {
        type: {
          name: 'object'
        },
        required: false,
        description: 'this value will be merged into placement`s config, please refer to the settings rc-tooltip'
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
        description: 'The position of the tooltip relative to the target, which can be one of top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom',
        defaultValue: {
          value: 'top',
          computed: false
        }
      }
    },
    description: 'Tooltip Component'
  }
}
