# Usage

## Badge

```jsx
<Badge count={5}>
  <a href="#" />
</Badge>
```

```jsx
  import Badge from 'ui/dist/admin/badge'
  <Badge 
    dot
    color={ ...props | optional } 
    count={ ...props | optional } 
    overflowCount={ ...props | optional } 
    showZero={ ...props | optional } 
    status={ ...props | optional } 
    text={ ...props | optional } 
    title={ ...props | optional } 
  />
```

## Badge with Avatar

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