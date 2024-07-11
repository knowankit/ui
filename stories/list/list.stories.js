import React from 'react'
import { storiesOf } from '@storybook/react'
import List from '../../src/admin/list'
import ListItem from '../../src/admin/list/item'
import ListItemMeta from '../../src/admin/list/item-meta'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import Avatar from '../../src/admin/avatar'

generateProps(List)

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

storiesOf('List', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [List],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <ListItem>
            <ListItemMeta
              avatar={<Avatar src='https://picsum.photos/id/14/200/200' />}
              title={item}
              description='Man charged over missing wedding girl'
            />
          </ListItem>)}
      />
    )
  })
