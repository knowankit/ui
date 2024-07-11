export default Component => {
  Component.__docgenInfo = {
    props: {
      accept: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'File types that can be accepted.'
      },
      directory: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'support upload whole directory',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      beforeUpload: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Hook function which will be executed before uploading. Uploading will be stopped with false or a rejected Promise returned. Warning：this function is not supported in IE9'
      },
      customRequest: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest'
      },
      data: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Uploading extra params or function which can return uploading extra params.'
      },
      defaultFileList: {
        type: {
          name: 'object'
        },
        required: false,
        description: 'Default list of files that have been uploaded.'
      },
      headers: {
        type: {
          name: 'object'
        },
        required: false,
        description: 'Set request headers, valid above IE10.'
      },
      disabled: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'disable upload button',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      multiple: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to support selected multiple file. IE10+ supported. You can select multiple files with CTRL holding down while multiple is set to be true',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      name: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'The name of uploading file',
        defaultValue: {
          value: 'file',
          computed: false
        }
      },
      showUploadList: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to show default upload list, could be an object to specify showPreviewIcon and showRemoveIcon individually',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      supportServerRender: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Need to be turned on while the server side is rendering',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      openFileDialogOnClick: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'click open file dialog',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      listType: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'text'
            },
            {
              value: 'picture'
            },
            {
              value: 'picture-card'
            }
          ]
        },
        required: false,
        description: 'Built-in stylesheets, support for three types: text, picture or picture-card',
        defaultValue: {
          value: 'text',
          computed: false
        }
      },
      action: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Uploading URL'
      },
      withCredentials: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'ajax upload with cookie sent',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      onChange: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'A callback function, can be executed when uploading state is changing'
      },
      onPreview: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'A callback function, will be executed when file link or preview icon is clicked'
      },
      onRemove: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject'
      },
      transformFile: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Customize transform file before request'
      }
    },
    description: 'Upload component'
  }
}
