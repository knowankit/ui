import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import generateProps from './index.docgen'
import Doc from './index.md'
import { boolean, array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Dropdown from '../../src/admin/dropdown'
import Spacing from '../story-components/spacing'
import Button from '../../src/admin/button'
import Menu from '../../src/admin/menu'
import Icon from '../../src/admin/icon'

const { SubMenu } = Menu

const menu = (
  <Menu>
    <Menu.Item>
      <a target='_blank' rel='Dummy Link' href='http://www.alipay.com/'>
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='Dummy Link' href='http://www.taobao.com/'>
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='Dummy Link' href='http://www.tmall.com/'>
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

const subMenu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title='sub menu'>
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title='disabled sub menu' disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
)

generateProps(Dropdown)

storiesOf('Dropdown', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Dropdown, Menu, Menu.Item],
      propTablesExclude: [Icon]
    }
  })
  .add('default', () => {
    return (
      <Dropdown
        overlay={menu}
        visible={boolean('visible', true)}
        trigger={array('trigger', ['click'])}
        disabled={boolean('visible', false)}
        onVisibleChange={action('toggleMenuVisibility:onVisibleChange')}>
        <a className='ant-dropdown-link' href='#'>
          Click me <Icon type='down' />
        </a>
      </Dropdown>
    )
  })
  .add('dropdown button', () => {
    return (
      <Fragment>
        <Dropdown overlay={subMenu}>
          <a className='ant-dropdown-link' href='#'>
            Cascading menu <Icon type='down' />
          </a>
        </Dropdown>
        <Spacing />
        <Dropdown
          overlay={menu}>
          <Button>
            Hover me <Icon type='down' />
          </Button>
        </Dropdown>
        <Spacing />
        <Dropdown.Button
          overlay={menu}
          trigger={['click']}
          onClick={action('clicked:onClick')}>
          Click me
        </Dropdown.Button>
      </Fragment>
    )
  })
