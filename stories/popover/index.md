# Usage

## Popover Component

```jsx
  import Popover from 'ui/dist/admin/popover'

  <Popover 
    content={...props} 
    title={...props | optional} 
    trigger={...props | optional} 
    visible={...props | optional} 
    placement={...props | optional} 
  />
```

## Popconfirm Component

```jsx
  import Popconfirm from 'ui/dist/admin/popover/confirm'

  <Popover 
    content={...props} 
    title={...props | optional} 
    trigger={...props | optional} 
    visible={...props | optional} 
    okText={...props} 
    cancelText={...props} 
    onConfirm={this.onConfirm}
    onCancel={this.onCancel}
    placement={...props | optional} 
  />
```