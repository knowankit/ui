import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import Collapse from '../../src/admin/collapse'
import Panel from '../../src/admin/collapse/panel'

generateProps(Collapse)

storiesOf('Collapse', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Collapse],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Collapse
        defaultActiveKey={['1']}
        activeKey={'1'}
        onChange={action('collapse:onChange')}>
        <Panel
          header={'This is panel header 1'}
          key='1'>
          <p>Panel 1</p>
        </Panel>
        <Panel
          header={'This is panel header 2'}
          key='2'>
          <p>Panel 2</p>
        </Panel>
        <Panel
          header={'This is panel header 3'}
          key='3'
          disabled>
          <p>Panel 3</p>
        </Panel>
      </Collapse>
    )
  })
