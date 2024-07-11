export default Component => {
  Component.__docgenInfo = {
    props: {
      bodyStyle: {
        type: {
          name: 'object'
        },
        required: false,
        description: 'Body style for modal body element. Such as height, padding etc.'
      },
      centered: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Centered Modal',
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
        description: 'Whether a close (x) button is visible on top right of the modal dialog or not',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      confirmLoading: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to apply loading visual effect for OK button or not',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      destroyOnClose: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to unmount child components on onClose',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      footer: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Footer content, set as footer={null} when you don`t need default buttons',
        defaultValue: {
          value: 'OK and Cancel buttons',
          computed: false
        }
      },
      forceRender: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Force render Modal',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      mask: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether show mask or not',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      maskClosable: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to close the modal dialog when the mask (area outside the modal) is clicked',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      okText: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Text of the OK button',
        defaultValue: {
          value: 'OK',
          computed: false
        }
      },
      okType: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Button type of the OK button',
        defaultValue: {
          value: 'primary',
          computed: false
        }
      },
      title: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'The modal dialog`s title',
        defaultValue: {
          value: 'primary',
          computed: false
        }
      },
      visible: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether the modal dialog is visible or not',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      width: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'Width of the modal dialog',
        defaultValue: {
          value: 520,
          computed: false
        }
      },
      wrapClassName: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'The class name of the container of the modal dialog'
      },
      zIndex: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'The z-index of the Modal',
        defaultValue: {
          value: 1000,
          computed: false
        }
      },
      onCancel: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Specify a function that will be called when a user clicks mask, close button on top right or Cancel button'
      },
      onOk: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Specify a function that will be called when a user clicks the OK button'
      },
      afterClose: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Specify a function that will be called when modal is closed completely.'
      },
      cancelText: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Text of the Cancel button with Modal.confirm',
        defaultValue: {
          value: 'Cancel',
          computed: false
        }
      },
      autoFocusButton: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'ok'
            },
            {
              value: 'cancel'
            }
          ]
        },
        required: false,
        description: 'Specify which button to autofocus',
        defaultValue: {
          value: 'ok',
          computed: false
        }
      },
      style: {
        type: {
          name: 'object'
        },
        required: false,
        description: 'Style of floating layer, typically used at least for adjusting the position.'
      },
      maskStyle: {
        type: {
          name: 'object'
        },
        required: false,
        description: 'Style for modal`s mask element.'
      },
      className: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'className of container'
      },
      content: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Content'
      },
      icon: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'custom icon'
      },
      iconType: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'custom icon'
      },
      keyboard: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether support press esc to close',
        defaultValue: {
          value: true,
          computed: false
        }
      }
    },
    description: 'Modal Component'
  }
}
