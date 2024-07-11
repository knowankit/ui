# Usage

## Dropdown
```jsx
  import Dropdown from 'ui/dist/admin/dropdown'

  const menu = (
    <Menu>
      <Menu.Item>
        <a target='_blank' rel='Dummy Link' href='#'>
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank' rel='Dummy Link' href='#'>
          2nd menu item
        </a>
      </Menu.Item>
    </Menu>
  )

  <Dropdown  
  overlay={menu}>
    <a className='ant-dropdown-link' href='#'>
      Hover me <Icon type='down' />
    </a>
  </Dropdown>
```

## Dropdown with all the propTypes
```jsx
  import Dropdown from 'ui/dist/admin/dropdown'

  <Dropdown 
    overlay={...props }
    disabled={...props | optional}	
    overlayClassName={...props | optional}
    overlayStyle={...props | optional}
    placement={...props | optional}
    trigger={...props | optional}
    visible={...props | optional}
    onVisibleChange={this.onToggleVisibility}
  >
    Dropdown 
  </Dropdown>

  <Dropdown.Button
    overlay={...props }
    disabled={...props | optional}	
    overlayClassName={...props | optional}
    overlayStyle={...props | optional}
    placement={...props | optional}
    trigger={...props | optional}
    visible={...props | optional}
    onClick={this.onClick}
    onVisibleChange={this.onToggleVisibility}>
    Click me
  </Dropdown.Button>
```