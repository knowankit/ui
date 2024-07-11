import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import WrapperDecorator from '../decorators/wrapper-decorator'
import generateProps from './index.docgen'
import Doc from './index.md'
import Center from '../story-components/component-wrapper'
import Table from '../../src/admin/table'

const WrapperStyle = styled(Center)`
  background: #fff;
  min-width: 1000px;
`
const dataSource = []
for (let i = 0; i < 26; i++) {
  dataSource.push({
    key: i,
    name: `John Doe ${i}`,
    phoneNo: '9988999888',
    email: `johndoe_${i}@example.com`,
    age: 32
  })
}

const columns = [{
  title: 'Name',
  phoneNo: '9988999888',
  dataIndex: 'name',
  key: 'name',
  sorter: (a, b) => a.age - b.age
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  sorter: (a, b) => a.age - b.age
}, {
  title: 'Phone No',
  dataIndex: 'phoneNo',
  key: 'phoneNo'
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email'
}]

generateProps(Table)

storiesOf('Table', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(WrapperDecorator(WrapperStyle))
  .addParameters({
    info: {
      text: Doc,
      propTables: [Table],
      propTablesExclude: [...[WrapperStyle], ...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={record => record.id}
        loading={false}
        paginationText=''
        paginationLocale='Showing {{start}} to {{end}} of {{total}}'
        current={1}
        defaultCurrent={1}
        pageSize={25}
        total={75}
        pagination
        paginationOnChange={action('paginationOnChange')}
        paginationOnShowSizeChange={action('paginationOnShowSizeChange')}
      />
    )
  })
