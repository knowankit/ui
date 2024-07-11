import React from 'react'
import Table from 'antd/lib/table'

const getTypeString = (type) => {
  if (typeof type === 'string') {
    return type
  } else if (typeof type === 'object') {
    // it's an object
    switch (type.name) {
      case 'enum':
        return `${type.name}(${type.value.map(val => val.value).join(', ')})`
      case 'union':
        return `${type.name}(${type.value.map(val => val.name).join(', ')})`
      default:
        return type.name
    }
  }

  return ''
}

const PropsTable = ({ propDefinitions }) => {
  const columns = ['Name', 'Type', 'Default', 'Description'].map(title => ({
    title,
    dataIndex: title.toLowerCase(),
    key: title.toLowerCase()
  }))

  const data = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return {
        key: property,
        name: property,
        type: getTypeString(propType),
        default: defaultValue,
        description,
        required
      }
    }
  )

  return (
    <Table bordered dataSource={data} columns={columns} />
  )
}

PropsTable.displayName = 'PropTable'

export default PropsTable
