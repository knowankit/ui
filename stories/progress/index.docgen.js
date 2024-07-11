export default Component => {
  Component.__docgenInfo = {
    props: {
      percent: {
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
      showInfo: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether to display the progress value and the status icon',
        defaultValue: {
          value: 'true',
          computed: false
        }
      },
      strokeColor: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'color of progress bar'
      },
      successPercent: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'segmented success percent',
        defaultValue: {
          value: '0',
          computed: false
        }
      },
      strokeWidth: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'to set the width of the progress bar, unit: px',
        defaultValue: {
          value: '10',
          computed: false
        }
      },
      width: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'to set the canvas width of the circular progress, unit: px',
        defaultValue: {
          value: '132',
          computed: false
        }
      },
      gapDegree: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'the gap degree of half circle, 0 ~ 360',
        defaultValue: {
          value: '132',
          computed: false
        }
      },
      type: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'line'
            },
            {
              value: 'circle'
            },
            {
              value: 'dashboard'
            }
          ]
        },
        required: false,
        description: 'to set the type, options: line circle dashboard',
        defaultValue: {
          value: 'line',
          computed: false
        }
      },
      status: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'success'
            },
            {
              value: 'exception'
            },
            {
              value: 'normal'
            },
            {
              value: 'active'
            }
          ]
        },
        required: false,
        description: 'to set the status of the Progress, options: success exception normal active(line only)'
      },
      strokeLinecap: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'round'
            },
            {
              value: 'square'
            }
          ]
        },
        required: false,
        description: 'to set the style of the progress linecap',
        defaultValue: {
          value: 'square',
          computed: false
        }
      },
      gapPosition: {
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
              value: 'left'
            },
            {
              value: 'right'
            }
          ]
        },
        required: false,
        description: 'the gap position, options: top bottom left right',
        defaultValue: {
          value: 'top',
          computed: false
        }
      }
    },
    description: 'Progress Component'
  }
}
