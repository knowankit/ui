# Usage

## Progress

```jsx
  import Progress from 'ui/dist/admin/progress'

  <Progress 
    percent={...props}
    type={...props | optional} 
    status={...props | optional} 
    showInfo={...props | optional}
    successPercent={...props | optional}
    strokeColor={...props | optional}
    strokeLinecap={...props | optional}
  />
```

## Progress types

```jsx
  import Progress from 'ui/dist/admin/progress'

  <Progress 
    percent={...props}
    type={'line'} 
    strokeWidth={...props | optional} 
    strokeColor={...props | optional} 
  />

  <Progress 
    percent={...props}
    type={'circle'} 
    width={...props | optional} 
    strokeWidth={...props | optional} 
    strokeColor={...props | optional} 
  />

  <Progress 
    percent={...props}
    type={'circle'} 
    strokeWidth={...props | optional} 
    gapDegree={...props | optional} 
    gapPosition={...props | optional} 
  />
```