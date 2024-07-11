# Usage

## Menu Component

```jsx
  import Menu from 'ui/dist/admin/menu'
  import Icon from 'ui/dist/admin/icon'

  const SubMenu = Menu.SubMenu
  const MenuItem = Menu.Item
  const MenuItemGroup = Menu.ItemGroup

  <Menu 
    mode={...props}
    theme={...props}
    defaultOpenKeys={...props | optional}
    defaultSelectedKeys={...props | optional}
    forceSubMenuRender={...props | optional}
    inlineCollapsed={...props | optional}
    inlineIndent={...props | optional}
    multiple={...props | optional}
    openKeys={...props | optional}
    selectable={...props | optional}
    selectedKeys={...props | optional}
    style={...props | optional}
    subMenuCloseDelay={...props | optional}
    subMenuOpenDelay={...props | optional}
    onClick={this.onClick}
    onDeselect={this.onDeselect}
    onOpenChange={this.onOpenChange}
    onSelect={this.onSelect}
  >
    <SubMenu 
      key={...props}
      title={...props | <Icon type='mail' />Navigation Name}
      disabled={...props | optional}
      popupClassName={...props | optional}
      onTitleClick={this.onTitleClick}>
      <MenuItem
        key={...props}
        title={...props | optional}
        disabled={...props | optional}>
        Option 1
      </MenuItem>
      <MenuItem
        key={...props}
        title={...props | optional}
        disabled={...props | optional}>
        Option 2
      </MenuItem>
    </SubMenu>
    <SubMenu 
      key={...props}
      title={...props | <Icon type='mail' />Navigation Name}
      disabled={...props | optional}
      popupClassName={...props | optional}
      onTitleClick={this.onTitleClick}>
      <MenuItemGroup
        title={...props | optional}>
        <MenuItem
          key={...props}
          title={...props | optional}
          disabled={...props | optional}>
          Option 1
        </MenuItem>
        <MenuItem
          key={...props}
          title={...props | optional}
          disabled={...props | optional}>
          Option 2
        </MenuItem>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
```