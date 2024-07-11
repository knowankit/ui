import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import List from '../../src/admin/list'
import ListItem from '../../src/admin/list/item'
import Input from '../../src/admin/input'
import InputGroup from '../../src/admin/input/group'
import TextArea from '../../src/admin/input/text-area'
import SearchBox from '../../src/admin/input/search'

generateProps(Input)

storiesOf('Input', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Input],
      propTablesExclude: [...[List, ListItem], ...excludeNode]
    }
  })
  .add('input box', () => {
    return <Input placeholder='Placeholder' size='default' />
  })
  .add('input group', () => {
    return (
      <InputGroup>
        <Input placeholder='Placeholder' size='default' />
        <Input placeholder='Anything' size='large' />
      </InputGroup>
    )
  })
  .add('input box sizes', () => {
    return (
      <List
        bordered
        dataSource={['default', 'large', 'small']}
        renderItem={size =>
          <ListItem>
            <Input placeholder={size} size={size} />
          </ListItem>
        }
      />
    )
  }, {
    info: {
      propTables: [Input]
    }
  })
  .add('search box', () => {
    return <SearchBox placeholder={text('placeholder', 'Search...')} size={text('size', 'Default')} />
  })
  .add('text area', () => {
    return <TextArea rows={2} cols={20} placeholder='text area' />
  }, {
    info: {
      propTables: [TextArea]
    }
  })
