import React from 'react'
import { storiesOf } from '@storybook/react'
import Badge from '../../src/admin/badge'
import Avatar from '../../src/admin/avatar'
import Icon from '../../src/admin/icon'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import List from '../../src/admin/list'
import ListItem from '../../src/admin/list/item'

generateProps(Badge)

storiesOf('Badge', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Badge],
      propTablesExclude: [...[List, ListItem], ...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Badge count={10} />
    )
  })
  .add('with avatar', () => {
    return (
      <Badge count={4} >
        <Avatar shape='square' icon='mail' />
      </Badge>
    )
  })
  .add('with icon', () => {
    return (
      <Badge count={<Icon type='question' />} >
        <Avatar icon='user' />
      </Badge>
    )
  })
