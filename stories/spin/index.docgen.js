export default Component => {
  Component.__docgenInfo = {
    props: {
      delay: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'to set the completion percentage',
        defaultValue: {
          value: '0',
          computed: false
        }
      },
      size: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'size of Spin, options: small, default and large',
        defaultValue: {
          value: 'default',
          computed: false
        }
      },
      spinning: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether Spin is spinning',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      tip: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'customize description content when Spin has children'
      },
      wrapperClassName: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'className of wrapper when Spin has children'
      },
      indicator: {
        type: {
          name: 'ReactElement'
        },
        required: false,
        description: 'React node of the spinning indicator'
      }
    },
    description: 'Progress Component'
  }
}
