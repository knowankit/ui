import React, { Component } from 'react'
import Form from 'antd/lib/form'

class FormItemComponent extends Component {
  render () {
    return <Form.Item {...this.props} />
  }
}

export default FormItemComponent
