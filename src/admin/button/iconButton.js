import React, { Component } from 'react'
import Button from 'antd/lib/button'
import Icon from 'antd/lib/icon'

const ButtonGroup = Button.Group

class ButtonComponent extends Component {
  render () {
    const {
      type,
      icon,
      value,
      position
    } = this.props

    const iconPosition = position
    let button
    if (iconPosition === 'right') {
      button = <Button type={type}>
        {value}<Icon type={icon} />
      </Button>
    } else {
      button = <Button type={type}>
        <Icon type={icon} />{value}
      </Button>
    }

    return (
      <ButtonGroup {...this.props}>
        {button}
      </ButtonGroup>
    )
  }
}

export default ButtonComponent
