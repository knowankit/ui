export default Component => {
  Component.__docgenInfo = {
    props: {
      dataSource: {
        type: {
          name: 'array'
        },
        required: true,
        description: 'array of objects to render'
      },
      columns: {
        type: {
          name: 'array'
        },
        required: true,
        description: 'array of objects to define column types, sort, filter, etc.'
      },
      rowKey: {
        type: {
          name: 'string'
        },
        required: true,
        description: 'unique key for each row component (id)',
        defaultValue: {
          computed: true
        }
      },
      loading: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Shows loading table state',
        defaultValue: {
          value: 'false',
          computed: false
        }
      },
      pagination: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Enable/disable pagination for data table',
        defaultValue: {
          value: 'true'
        }
      },
      paginationText: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Shows text at the left side of pagination component. Remains hidden if pagination is disabled. This can override paginationLocale',
        defaultValue: {
          value: '',
          computed: false
        }
      },
      paginationLocale: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Displays calculated pagination text based on current, pageSize and total props. paginationText can override this.',
        defaultValue: {
          value: 'Showing {{start}} to {{end}} of {{total}}',
          computed: true
        }
      },
      pageSize: {
        type: {
          name: 'number'
        },
        required: true,
        description: 'Number of rows to show per page'
      },
      current: {
        type: {
          name: 'number'
        },
        required: true,
        description: 'Pagination current page'
      },
      total: {
        type: {
          name: 'number'
        },
        required: true,
        description: 'Total number of rows in the data source'
      },
      defaultCurrent: {
        type: {
          name: 'number'
        },
        required: true,
        description: 'Pagination initialized current page'
      },
      onChange: {
        type: {
          name: 'function'
        },
        required: true,
        description: 'Table onChange callback'
      },
      paginationOnChange: {
        type: {
          name: 'function'
        },
        required: true,
        description: 'Pagination onChange callback'
      },
      paginationOnShowSizeChange: {
        type: {
          name: 'function'
        },
        required: true,
        description: 'Pagination OnShowSizeChange callback'
      }
    },
    description: 'Table Component'
  }
}
