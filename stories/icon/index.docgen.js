export default Component => {
  Component.__docgenInfo = {
    props: {
      type: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'type of the ant design icon',
        defaultValue: {
          value: 'home',
          computed: false
        }
      },
      spin: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'rotate icon with animation',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      rotate: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'rotate degrees (added in 3.13.0, not working in IE9)'
      },
      twoToneColor: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'only supports the two-tone icon. specify the primary color.',
        defaultValue: {
          value: '#eb2f96',
          computed: false
        }
      },
      theme: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'outlined'
            },
            {
              value: 'filled'
            },
            {
              value: 'twoTone'
            }
          ]
        },
        required: false,
        description: 'theme of the ant design icon',
        defaultValue: {
          value: 'outlined',
          computed: false
        }
      }
    },
    description: 'Icon'
  }
}
