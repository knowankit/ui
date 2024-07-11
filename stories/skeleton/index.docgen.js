export default Component => {
  Component.__docgenInfo = {
    props: {
      active: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Show animation effect',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      avatar: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Show avatar placeholder',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      loading: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Display the skeleton when true'
      },
      paragraph: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Show paragraph placeholder',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      title: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Show title placeholder',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      width: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'Set the width of title | paragraph'
      },
      rows: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'Set the width of title | paragraph'
      },
      size: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'default'
            },
            {
              value: 'small'
            },
            {
              value: 'large'
            }
          ]
        },
        required: false,
        description: 'Set the size of avatar'
      },
      shape: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'circle'
            },
            {
              value: 'square'
            }
          ]
        },
        required: false,
        description: 'Set the shape of avatar'
      }
    },
    description: 'Skeleton Component'
  }
}
