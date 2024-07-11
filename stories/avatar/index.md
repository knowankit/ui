# Usage

## Avatar

```jsx
  import Avatar from 'ui/dist/admin/avatar'
  <Avatar 
    icon={...props } 
    shape={...props | optional} 
    alt={...props | optional} 
    size={...props | optional}
  />
```

## Avatar types

```jsx
  import Avatar from 'ui/dist/admin/avatar'
  <Avatar
    src={...props } 
    srcSet={...props | optional} 
    size={...props | optional} 
    alt={...props | optional} 
    onError={action}
  />
```

## Avatar with Badges

```jsx
  import Avatar from 'ui/dist/admin/avatar'
  import Badges from 'ui/dist/admin/badges'
  <Badge count={...props } >
    <Avatar 
      icon={...props } 
      shape={...props | optional} 
      alt={...props | optional} />
  </Badge>
  <Badge dot >
    <Avatar 
      icon={...props } 
      shape={...props | optional} 
      alt={...props | optional} />
  </Badge>
```