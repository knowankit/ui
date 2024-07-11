export default Component => {
  Component.__docgenInfo = {
    props: {
      autoExpandParent: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to automatically expand a parent treeNode',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      blockNode: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether treeNode fill remaining horizontal space',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      checkable: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Adds a Checkbox before the treeNodes',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      defaultCheckedKeys: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'Specifies the keys of the default checked treeNodes',
        defaultValue: {
          value: [],
          computed: false
        }
      },
      defaultExpandAll: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Whether to expand all treeNodes by default',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      defaultExpandedKeys: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'Specify the keys of the default expanded treeNodes',
        defaultValue: {
          value: [],
          computed: false
        }
      },
      defaultExpandParent: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'auto expand parent treeNodes when init',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      defaultSelectedKeys: {
        type: {
          name: 'array'
        },
        required: false,
        description: 'Specifies the keys of the default selected treeNodes',
        defaultValue: {
          value: [],
          computed: false
        }
      },
      disabled: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'whether disabled the tree',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      draggable: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Specifies whether this Tree is draggable (IE > 8)',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      loadedKeys: {
        type: {
          name: 'array'
        },
        required: false,
        description: '(Controlled) Set loaded tree nodes. Need work with loadData',
        defaultValue: {
          value: [],
          computed: false
        }
      },
      showIcon: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Shows the icon before a TreeNode`s title. There is no default style; you must set a custom style for it if set to true',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      showLine: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Shows a connecting line',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      disableCheckbox: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Disables the checkbox of the treeNode',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      isLeaf: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Determines if this is a leaf node(effective when loadData is specified)',
        defaultValue: {
          value: false,
          computed: false
        }
      },
      key: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree!',
        defaultValue: {
          value: 'internal calculated position of treeNode',
          computed: false
        }
      },
      title: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'Title',
        defaultValue: {
          value: '---',
          computed: false
        }
      },
      expandAction: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'click'
            },
            {
              value: 'doubleClick'
            }
          ]
        },
        required: false,
        description: 'Directory open logic, optional false `click` `doubleClick`',
        defaultValue: {
          value: 'click',
          computed: false
        }
      },
      multiple: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Allows selecting multiple treeNodes',
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
        description: 'whether can be selected',
        defaultValue: {
          value: true,
          computed: false
        }
      },
      checkedKeys: {
        type: {
          name: 'array'
        },
        required: false,
        description: '(Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When checkable and checkStrictly is true, its object has checked and halfChecked property. Regardless of whether the child or parent treeNode is checked, they won`t impact each other.'
      },
      selectedKeys: {
        type: {
          name: 'array'
        },
        required: false,
        description: '(Controlled) Specifies the keys of the selected treeNodes'
      },
      onCheck: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onCheck event occurs'
      },
      onDragEnd: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onDragEnd event occurs'
      },
      onDragEnter: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onDragEnter event occurs'
      },
      onDragLeave: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onDragLeave event occurs'
      },
      onDragOver: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onDragOver event occurs'
      },
      onDragStart: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onDragStart event occurs'
      },
      onDrop: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onDrop event occurs'
      },
      onExpand: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onExpand event occurs'
      },
      onLoad: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onLoad event occurs'
      },
      onRightClick: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onRightClick event occurs'
      },
      onSelect: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Callback function for when the onSelect event occurs'
      },
      filterTreeNode: {
        type: {
          name: 'func'
        },
        required: false,
        description: 'Defines a function to filter (highlight) treeNodes. When the function returns true, the corresponding treeNode will be highlighted'
      },
      checkStrictly: {
        type: {
          name: 'bool'
        },
        required: false,
        description: 'Check treeNode precisely; parent treeNode and children treeNodes are not associated',
        defaultValue: {
          value: false,
          computed: false
        }
      }
    },
    description: 'Tree Component'
  }
}
