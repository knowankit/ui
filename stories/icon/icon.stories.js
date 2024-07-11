import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '../../src/admin/icon'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import List from '../../src/admin/list'
import ListItem from '../../src/admin/list/item'

generateProps(Icon)

storiesOf('Icon', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Icon],
      propTablesExclude: [...[List, ListItem], ...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Icon type='home' />
    )
  })
