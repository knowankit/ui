import React, { Component } from 'react'
import Input from 'antd/lib/input'

const Search = Input.Search

class SearchComponent extends Component {
  render () {
    return <Search {...this.props} size={this.props.size || 'default'} />
  }
}

export default SearchComponent
