import React from 'react'
import { storiesOf } from '@storybook/react'
import generateProps from './index.docgen'
import Doc from './index.md'
import List from '../../src/admin/list'
import ListItem from '../../src/admin/list/item'
import excludeNode from '../global-prop-table-excludes'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import AutoComplete from '../../src/admin/auto-complete'
import Input from '../../src/admin/input'
import Icon from '../../src/admin/icon'
import Button from '../../src/admin/button'
import { action } from '@storybook/addon-actions'

const dataSource = ['12345', '23456', '34567']

generateProps(AutoComplete)

storiesOf('AutoComplete', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [AutoComplete],
      propTablesExclude: [...[List, ListItem], ...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <AutoComplete
        defaultOpen
        dataSource={dataSource}
        open
        placeholder='Auto Complete'
        onChange={action('autoCompleteOnChange')}
      />
    )
  })
  .add('search button with icon', () => {
    return (
      <AutoComplete
        defaultOpen
        dataSource={dataSource}
        placeholder='Search here'
        open
        onChange={action('autoCompleteOnChange')}
        onSelect={action('autoCompleteOnSelect')}
      >
        <Input suffix={<Icon type='search' />} />
      </AutoComplete>
    )
  })
  .add('search button with button', () => {
    return (
      <AutoComplete
        defaultOpen
        dataSource={dataSource}
        open
        placeholder='Input here'
        onChange={action('autoCompleteOnChange')}
      >
        <Input
          suffix={
            <Button
              style={{ marginRight: -12 }}
              type='primary'
            >
              <Icon type='search' />
            </Button>
          }
        />
      </AutoComplete>
    )
  })
