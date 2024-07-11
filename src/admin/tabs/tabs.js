import React, { Component } from 'react'
import Tabs from 'antd/lib/tabs'

class TabsComponent extends Component {
  render () {
    return <Tabs {...this.props} size={this.props.size || 'large'} />
  }
}

export default TabsComponent
