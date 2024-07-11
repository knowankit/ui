export default Component => {
  Component.__docgenInfo = {
    props: {
      size: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'can be set to small default large or omitted (meaning large)',
        defaultValue: {
          value: 'large',
          computed: false
        }
      }
    },
    description: 'Tabs'
  }
}
