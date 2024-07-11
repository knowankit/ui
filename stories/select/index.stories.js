import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import WrapperDecorator from '../decorators/wrapper-decorator'
import generateProps from './index.docgen'
import Doc from './index.md'
import Center from '../story-components/component-wrapper'
import { action } from '@storybook/addon-actions'
import Select from '../../src/admin/select'
import Option from '../../src/admin/select/option'
import OptGroup from '../../src/admin/select/group'
import SelectMultiple from '../../src/admin/select/multiple'

const WrapperStyle = styled(Center)`
  width: 500px;
`

const state = {
  visible: true,
  searchText: ''
}

const dataSourceGroups = [
  {
    key: 'header',
    data: [
      {
        label: 'Select Group 1 Option 1',
        key: 'Group-1-Option-1',
        checkbox: {
          onChange: e => action('option: onChange')
        }
      },
      {
        label: 'Group 1 Option 2',
        key: 'Group-1-Option-2',
        checkbox: {
          onChange: e => action('option: onChange')
        }
      }
    ],
    showDivider: true
  },
  {
    key: 'projects',
    data: [
      {
        label: 'Group 2 Option 1',
        key: 'Group-2-Option-1',
        checkbox: {
          onChange: e => action('option: onChange')
        }
      },
      {
        label: 'Group 2 Option 2',
        key: 'Group-2-Option-2',
        checkbox: {
          onChange: e => action('option: onChange')
        }
      }
    ]
  }
]

generateProps(Select)
generateProps(Option)
generateProps(SelectMultiple)

storiesOf('Select', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(WrapperDecorator(WrapperStyle))
  .addParameters({
    info: {
      text: Doc,
      propTables: [Select, Option, SelectMultiple],
      propTablesExclude: [...[WrapperStyle], ...excludeNode]
    }
  })
  .add('Default', () => {
    return (
      <Select
        defaultValue='natasha'
        style={{ width: 120 }}
        onChange={action('option:onChange')}
        disabled={false}
      >
        <Option value='steve'>Steve</Option>
        <Option value='tony'>Tony</Option>
        <Option value='bruce' disabled>Bruce</Option>
        <Option value='natasha'>Natasha</Option>
      </Select>
    )
  })
  .add('Option Groups', () => {
    return (
      <Select
        defaultValue='lucy'
        style={{ width: 200 }}
        onChange={action('options:onChange')}
      >
        <OptGroup label='Manager'>
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
        </OptGroup>
        <OptGroup label='Engineer'>
          <Option value='Yiminghe'>yiminghe</Option>
        </OptGroup>
      </Select>
    )
  })
  .add('Multiple', () => {
    return (
      <SelectMultiple
        visible={state.visible}
        placeholder='Search options'
        dataSourceGroups={dataSourceGroups}
        onSearchChange={action('onSearchChange')}
        onVisibleChange={action('onVisibleChange')}
        onSuffixIconClick={action('onSuffixIconClick')}
      />
    )
  })
