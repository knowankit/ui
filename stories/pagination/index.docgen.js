export default Component => {
  Component.__docgenInfo = {
    props: {
      current: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'current page number'
      },
      defaultCurrent: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'default initial page number',
        defaultValue: {
          value: 1,
          computed: false
        }
      },
      defaultPageSize: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'default number of data items per page',
        defaultValue: {
          value: 10,
          computed: false
        }
      },
      disabled: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'disable pagination'
      },
      hideOnSinglePage: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to hide pager on single page',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      pageSize: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'number of data items per page'
      },
      pageSizeOptions: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'specify the sizeChanger options',
        defaultValue: {
          value: ['10', '20', '30', '40'],
          computed: false
        }
      },
      showLessItems: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'show less page items',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      showQuickJumper: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'determine whether you can jump to pages directly',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      showSizeChanger: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'determine whether pageSize can be changed',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      showTitle: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'show page items title',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      simple: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether to use simple mode'
      },
      size: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'specify the size of Pagination, can be set to small',
        defaultValue: {
          value: '',
          computed: false
        }
      },
      total: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'total number of data items',
        defaultValue: {
          value: '10',
          computed: false
        }
      },
      itemRender: {
        type: {
          name: 'ReactNode'
        },
        required: false,
        description: 'to customize item innerHTML'
      },
      onChange: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'a callback function, executed when the page number is changed, and it takes the resulting page number and pageSize as its arguments'
      },
      onShowSizeChange: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'a callback function, executed when pageSize is changed'
      }
    },
    description: 'Pagination Component'
  }
}
