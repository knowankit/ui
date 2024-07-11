export default Component => {
  Component.__docgenInfo = {
    props: {
      bordered: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Toggles rendering of the border around the list',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      header: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'List header renderer'
      },
      footer: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'List footer renderer'
      },
      loading: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Shows a loading indicator while the contents of the list are being fetched',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      loadMore: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Shows a load more content'
      },
      grid: {
        type: {
          name: 'object',
          required: false,
          description: 'The grid type of list. You can set grid to something like {gutter: 16, column: 4}'
        }
      },
      pagination: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Pagination config, hide it by setting it to false',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      position: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'top'
            },
            {
              value: 'bottom'
            },
            {
              value: 'both'
            }
          ]
        },
        required: false,
        description: 'specify the position of Pagination',
        defaultValue: {
          value: 'bottom',
          computed: false
        }
      },
      itemLayout: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'horizontal'
            },
            {
              value: 'vertical'
            }
          ]
        },
        required: false,
        description: 'The layout of list, default is horizontal, If a vertical list is desired, set the itemLayout property to vertical'
      },
      size: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'default'
            },
            {
              value: 'middle'
            },
            {
              value: 'small'
            }
          ]
        },
        required: false,
        description: 'Size of list',
        defaultValue: {
          value: 'default',
          computed: false
        }
      },
      actions: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'The actions content of list item. If itemLayout is vertical, shows the content on bottom, otherwise shows content on the far right.'
      },
      extra: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'TThe extra content of list item. If itemLayout is vertical, shows the content on right, otherwise shows content on the far right.'
      },
      avatar: {
        type: {
          name: 'ReactNode'
        },
        required: false,
        description: 'The avatar of list item'
      },
      description: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'The description of list item'
      },
      title: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'The title of list item'
      },
      dataSource: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'dataSource array for list'
      },
      renderItem: {
        type: {
          name: 'ReactNode',
          required: false,
          description: 'customize list item when using dataSource'
        }
      }
    },
    description: 'List Component'
  }
}
