# Usage

## AutoComplete

```jsx
  import AutoComplete from 'ui/dist/admin/AutoComplete'
  <AutoComplete
    dataSource={...props } 
    placeholder={...props | optional} 
  />
```

## AutoComplete with Search Icon

```jsx
  import AutoComplete from 'ui/dist/admin/AutoComplete'
  <AutoComplete
    placeholder='Search here'
    dataSource={dataSource}
  >
    <Input suffix={<Icon type='search' />} />
  </AutoComplete>
```

## AutoComplete with Search Button

```jsx
  import AutoComplete from 'ui/dist/admin/AutoComplete'
  <AutoComplete
    dataSource={dataSource}
    placeholder='Input here'
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
```

## List of all function callback of AutoComplete component

```jsx
  import AutoComplete from 'ui/dist/admin/AutoComplete'
  <AutoComplete
    filterOption
    onChange
    onSearch
    onSelect
    onDropdownVisibleChange
  />
```