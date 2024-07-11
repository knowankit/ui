import React from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import Icon from '../../src/admin/icon'
import Tree from '../../src/admin/tree'

const { TreeNode } = Tree

generateProps(Tree)

storiesOf('Tree', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Tree],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Tree
        autoExpandParent
        defaultExpandAll
        checkable
        multiple
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
      >
        <TreeNode title='parent 1' key='0-0' icon={<Icon type='smile-o' />}>
          <TreeNode title='parent 1-0' key='0-0-0' disabled>
            <TreeNode title='leaf' key='0-0-0-0' disableCheckbox />
            <TreeNode title='leaf' key='0-0-0-1' />
          </TreeNode>
          <TreeNode title='parent 1-1' key='0-0-1'>
            <TreeNode title={<span>sss</span>} key='0-0-1-0' />
          </TreeNode>
        </TreeNode>
      </Tree>
    )
  })
