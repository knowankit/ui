export default Component => {
  Component.__docgenInfo = {
    props: {
      type: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'can be set to primary ghost dashed danger(added in 2.7) or omitted (meaning default)',
        defaultValue: {
          value: 'default',
          computed: false
        }
      },
      shape: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'circle'
            },
            {
              value: 'circle-outline'
            }
          ]
        },
        required: false,
        description: 'can be set to circle or omitted'
      },
      size: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'small'
            },
            {
              value: 'large'
            },
            {
              value: 'default'
            }
          ]
        },
        required: false,
        description: 'can be set to small, large or omitted',
        defaultValue: {
          value: 'default',
          computed: false
        }
      },
      htmlType: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'submit'
            },
            {
              value: 'button'
            },
            {
              value: 'reset'
            }
          ]
        },
        required: false,
        description: 'set the original html type of button'
      },
      onClick: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'set the handler to handle click event'
      },
      loading: {
        type: {
          name: 'union',
          value: [
            {
              name: 'bool'
            },
            {
              name: 'object'
            }
          ]
        },
        required: false,
        description: 'set the loading status of button'
      },
      className: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'custom class-name used for styles'
      },
      icon: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'set the icon of button, see: Icon component'
      },
      block: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'option to fit button width to its parent width'
      }
    },
    description: 'Button Component'
  }
}
