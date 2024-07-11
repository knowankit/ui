import React, { Component, Fragment } from 'react'
import Divider from 'antd/lib/divider'
import Menu from 'antd/lib/menu'
import Dropdown from 'antd/lib/dropdown'
import Input from 'antd/lib/input'
import Checkbox from 'antd/lib/checkbox'
import Icon from 'antd/lib/icon'

import { MultipleStyle } from './styles'

const MenuItem = Menu.Item

class SelectMultiple extends Component {
  // ToDo: Add propTypes
  renderCheckboxItem (item) {
    return (
      <MenuItem className='ant-dropdown-menu-item'>
        <Checkbox
          {...item.checkbox}
          style={{ width: '100%' }}
        >
          {item.label}
        </Checkbox>
      </MenuItem>
    )
  }

  renderItem (item) {
    return (
      <MenuItem className='ant-dropdown-menu-item'>
        {item.label}
      </MenuItem>
    )
  }

  renderMenuItem (item) {
    if (item.data === 'divider') {
      return (
        <MenuItem className='dropdown-menu-multiselect-divider-item'>
          <Divider className='dropdown-divider-horizontal' />
        </MenuItem>
      )
    }

    return item.checkbox ? this.renderCheckboxItem(item) : this.renderItem(item)
  }

  renderMenuGroup (group) {
    // push an additional divider item if group's showDivider flag is true
    if (group.showDivider) group.data.push({ data: 'divider' })
    return group.data.map(item => this.renderMenuItem(item))
  }

  renderMenu () {
    return (
      <Menu>
        {this.props.dataSourceGroups.map(group => this.renderMenuGroup(group))}
      </Menu>
    )
  }

  renderSuffixIcon () {
    const { visible, suffixIcon } = this.props
    const iconType = visible ? 'up' : 'down'

    if (suffixIcon === false) return null

    return (
      <Icon
        type={this.props.suffixIconType || iconType}
        onClick={e => this.props.onSuffixIconClick(e)}
      />
    )
  }

  render () {
    return (
      <Fragment>
        <MultipleStyle />
        <Dropdown
          {...this.props}
          trigger={[this.props.trigger, 'click']}
          overlay={this.renderMenu()}
          className='dropdown-multiselect-menu'
        >
          <Input
            prefix={this.props.prefixIconType}
            suffix={this.renderSuffixIcon()}
            placeholder={this.props.placeholder || 'Search ...'} // ToDo: Translation
            onChange={this.props.onSearchChange.bind(this)}
          />
        </Dropdown>
      </Fragment>
    )
  }
}

export default SelectMultiple
