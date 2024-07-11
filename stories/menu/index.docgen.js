export default Component => {
  Component.__docgenInfo = {
    props: {
      defaultSelectedKeys: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'array with the keys of default selected menu items'
      },
      defaultOpenKeys: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'array with the keys of default opened sub menus'
      },
      inlineCollapsed: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'specifies the collapsed status when menu is inline mode',
        defaultValue: {
          value: 24,
          computed: false
        }
      },
      inlineIndent: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'indent px of inline menu item on each level'
      },
      subMenuCloseDelay: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'delay time to hide submenu when mouse leave, unit: second',
        defaultValue: {
          value: 0.1,
          computed: false
        }
      },
      subMenuOpenDelay: {
        type: {
          name: 'number'
        },
        required: false,
        description: 'delay time to show submenu when mouse enter, unit: second',
        defaultValue: {
          value: 0,
          computed: false
        }
      },
      onClick: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'callback executed when a menu item is clicked'
      },
      onDeselect: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'callback executed when a menu item is deselected, only supported for multiple mode'
      },
      onOpenChange: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'called when open/close sub menu'
      },
      onSelect: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'callback executed when a menu item is selected'
      },
      onTitleClick: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'callback executed when the sub menu title is clicked'
      },
      mode: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'vertical'
            },
            {
              value: 'horizontal'
            },
            {
              value: 'inline'
            }
          ]
        },
        required: false,
        description: 'type of the menu; vertical, horizontal, and inline modes are supported',
        defaultValue: {
          value: 'vertical',
          computed: false
        }
      },
      forceSubMenuRender: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'render submenu into DOM before it shows',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      style: {
        type: {
          name: 'object'
        },
        required: false,
        description: 'style of the root node'
      },
      overflowedIndicator: {
        type: {
          name: 'ReactNode'
        },
        required: false,
        description: 'Customized icon when menu collapsed'
      },
      disabled: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether menu item is disabled or not',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      popupClassName: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'sub menu class name'
      },
      key: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'unique id of the menu item'
      },
      title: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'set display title for collapsed item'
      },
      multiple: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Allow selection of multiple items',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      selectable: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'allow selecting menu items',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      theme: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'light'
            },
            {
              value: 'dark'
            }
          ]
        },
        required: false,
        description: 'color theme of the menu',
        defaultValue: {
          value: 'light',
          computed: false
        }
      }
    },
    description: 'Menu Component'
  }
}
