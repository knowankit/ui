import React from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import { boolean } from '@storybook/addon-knobs'
import Drawer from '../../src/admin/drawer'

generateProps(Drawer)

storiesOf('Drawer', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Drawer],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Drawer
        title='Basic Drawer'
        visible={boolean('visible', true)}
        closable={boolean('closable', true)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    )
  })
