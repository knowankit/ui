export default Component => {
  Component.__docgenInfo = {
    props: {
      closable: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether a close (x) button is visible on top right of the Drawer dialog or not',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      visible: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether the Drawer dialog is visible or not',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      width: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Width of the Drawer dialog',
        defaultValue: {
          value: '256',
          computed: false
        }
      },
      height: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'placement is top or bottom, height of the Drawer dialog'
      },
      title: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'The title for Drawer'
      },
      placement: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'top'
            },
            {
              value: 'right'
            },
            {
              value: 'bottom'
            },
            {
              value: 'left'
            }
          ]
        },
        required: false,
        description: 'The placement of the Drawer'
      },
      className: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'The class name of the container of the Drawer dialog'
      },
      zIndex: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'The z-index of the Drawer',
        defaultValue: {
          value: '1000',
          computed: false
        }
      },
      destroyOnClose: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to unmount child components on closing drawer or not',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      mask: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to show mask or not',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      maskClosable: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Clicking on the mask (area outside the Drawer) to close the Drawer or not',
        defaultValue: {
          value: 'true',
          computed: false
        }
      }
    },
    description: 'Checkbox Component'
  }
}
