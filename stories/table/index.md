# Usage

```jsx
  import Table from 'ui/dist/admin/table'

  const dataSource = []
  for (let i = 0; i < 26; i++) {
    dataSource.push({
      key: i,
      name: `John Doe ${i}`,
      phoneNo: '9988999888',
      email: `johndoe_${i}@example.com`,
      age: 32,
      address: `London, Park Lane no. ${i}`
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
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Phone No',
    dataIndex: 'phoneNo',
    key: 'phoneNo'
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  }]

  <Table
    dataSource={dataSource}
    columns={columns}
    rowKey={record => record.key}
    loading={false}
    paginationLocale='Showing {{start}} to {{end}} of {{total}}'
    current={1}
    defaultCurrent={1}
    pageSize={25}
    total={75}
    onChange={/* callbacks */}
    paginationOnChange={page => { /* callback */  }}
    paginationOnShowSizeChange={(current, size) => { /* callback */ }}
  />
```
