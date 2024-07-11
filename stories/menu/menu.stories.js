import React from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import { boolean } from '@storybook/addon-knobs'
import Menu from '../../src/admin/menu'
import Icon from '../../src/admin/icon'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
const MenuItemGroup = Menu.ItemGroup

generateProps(Menu)

storiesOf('Menu', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Menu],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        inlineCollapsed={boolean('inlineCollapsed', false)}
      >
        <SubMenu
          key='sub1'
          title={<span><Icon type='mail' /><span>Navigation One</span></span>}>
          <MenuItemGroup key='g1' title='Item 1'>
            <MenuItem key='1'>Option 1</MenuItem>
            <MenuItem key='2'>Option 2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup key='g2' title='Item 2'>
            <MenuItem key='3'>Option 3</MenuItem>
            <MenuItem key='4'>Option 4</MenuItem>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu
          key='sub2'
          title={<span><Icon type='appstore' /><span>Navigation Two</span></span>}>
          <MenuItem key='5'>Option 5</MenuItem>
          <MenuItem key='6'>Option 6</MenuItem>
          <SubMenu key='sub3' title='Submenu'>
            <MenuItem key='7'>Option 7</MenuItem>
            <MenuItem key='8'>Option 8</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key='sub4' title={<span><Icon type='setting' /><span>Navigation Three</span></span>}>
          <MenuItem key='9'>Option 9</MenuItem>
          <MenuItem key='10'>Option 10</MenuItem>
          <MenuItem key='11'>Option 11</MenuItem>
          <MenuItem key='12'>Option 12</MenuItem>
        </SubMenu>
      </Menu>
    )
  })
