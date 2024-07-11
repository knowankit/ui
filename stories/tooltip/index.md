# Usage

## Tooltip Component

```jsx
  import Tooltip from 'ui/dist/admin/tooltip'

  <Tooltip 
    title={...props}
    placement={...props | optional} 
    arrowPointAtCenter={...props | optional} 
    autoAdjustOverflow={...props | optional} 
    defaultVisible={...props | optional} 
    mouseEnterDelay={...props | optional} 
    mouseLeaveDelay={...props | optional} 
    overlayClassName={...props | optional} 
    trigger={...props | optional} 
    visible={...props | optional} 
    onVisibleChange={...props | optional} 
    getPopupContainer={...props | optional} >
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
```