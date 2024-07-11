# Usage

## Default

```jsx
  import Select from '../../src/admin/select'
  import Option from '../../src/admin/select/option'

  <Select defaultValue='lucy'
    onChange={action('option:onChange')}
    disabled={false}
  >
    <Option value='jack'>Jack</Option>
    <Option value='lucy'>Lucy</Option>
    <Option value='disabled' disabled>Disabled</Option>
    <Option value='Yiminghe'>yiminghe</Option>
  </Select>
```

## Option Groups

```jsx
  import Select from '../../src/admin/select'
  import Option from '../../src/admin/select/option'
  import OptGroup from '../../src/admin/select/group'

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
```

## Multiple

```jsx
  const dataSourceGroups = [
  {
    key: 'header',
    data: [
      {
        label: 'Select Group 1 Option 1',
        key: 'Group-1-Option-1',
        checkbox: {
          checked: true,
          onChange: e => action('option: onChange')
        }
      },
      {
        label: 'Group 1 Option 2',
        key: 'Group-1-Option-2',
        checkbox: {
          checked: true,
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
          checked: true,
          onChange: e => action('option: onChange')
        }
      },
      {
        label: 'Group 2 Option 2',
        key: 'Group-2-Option-2',
        checkbox: {
          checked: true,
          onChange: e => action('option: onChange')
        }
      }
    ]
  }
]

  <SelectMultiple
    visible={state.visible}
    placeholder='Search options'
    dataSourceGroups={dataSourceGroups}
    onSearchChange={action('onSearchChange')}
    onVisibleChange={action('onVisibleChange')}
    onSuffixIconClick={action('onSuffixIconClick')}
  />
```