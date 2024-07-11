# Usage
```jsx
  import List from 'ui/dist/admin/list'
  import ListItem from 'ui/dist/admin/list/item'
  import ListItemMeta from 'ui/dist/admin/list/item-meta'
  
  <List 
    dataSource={ ...props} 
    header={...props | optional} 
    footer={...props | optional} 
    bordered={...props | optional} 
    renderItem={item => (
      <ListItem>
        {item}
        <ListItemMeta
          avatar={...props | optional}
          title={...props | optional}
          description={...props | optional}
        />
      </ListItem>
    )}
  />
```