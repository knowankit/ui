import React from 'react'
import { storiesOf } from '@storybook/react'
import Tabs from '../../src/admin/tabs/tabs'
import TabPane from '../../src/admin/tabs/tab-pane'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'

generateProps(Tabs)

storiesOf('Tabs', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Tabs],
      propTablesExclude: [...[TabPane], ...excludeNode]
    }
  })
  .add('Tab Data', () => {
    return (
      <Tabs size='large' defaultActiveKey='1'>
        <TabPane tab='Tab 1' key='1'>Content 1</TabPane>
        <TabPane tab='Tab 2' key='2'>Content 2</TabPane>
        <TabPane tab='Tab 3' key='3'>Content 3</TabPane>
      </Tabs>
    )
  })
