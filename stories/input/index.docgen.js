export default Component => {
  Component.__docgenInfo = {
    props: {
      size: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'can be set to small default large or omitted (meaning default)',
        defaultValue: {
          value: 'default',
          computed: false
        }
      },
      placeholder: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'can be set to any string or omitted',
        defaultValue: {
          value: 'Placeholder',
          computed: false
        }
      }
    },
    description: 'Input'
  }
}
