import React, { Component, Fragment } from 'react'
import { TablePaginationTextStyle, PaginationWrapperStyles } from './styles'
import Table from 'antd/lib/table'
import RowComponent from 'antd/lib/row'
import ColComponent from 'antd/lib/col'
import Pagination from 'antd/lib/pagination'
import { i18nToString } from '../../lib/locale'

class TableComponent extends Component {
  calculateFirstRecord (currentPage, pageSize, totalRecords) {
    if (totalRecords === 0) return totalRecords
    const previousPage = currentPage - 1
    return pageSize * previousPage + 1
  }

  calculateLastRecord (currentPage, pageSize, totalRecords) {
    return (currentPage * pageSize) > totalRecords ? totalRecords : (currentPage * pageSize)
  }

  renderPagination () {
    const {
      pagination,
      current,
      defaultCurrent,
      total,
      pageSize,
      paginationOnChange,
      pageSizeOptions,
      paginationOnShowSizeChange
    } = this.props

    if (pagination === false) return null

    return (
      <Pagination
        className='ant-table-pagination'
        pageSizeOptions={pageSizeOptions || ['25', '50', '100']}
        showSizeChanger
        current={current}
        defaultCurrent={defaultCurrent}
        total={total}
        pageSize={pageSize}
        onChange={paginationOnChange}
        onShowSizeChange={paginationOnShowSizeChange}
      />
    )
  }

  renderPaginationText () {
    const {
      pagination,
      paginationText,
      paginationLocale,
      current,
      pageSize,
      total
    } = this.props

    if (pagination === false) return null
    if (paginationText) {
      return <TablePaginationTextStyle>{paginationText}</TablePaginationTextStyle>
    }
    return (
      <TablePaginationTextStyle>
        {i18nToString(paginationLocale, {
          start: this.calculateFirstRecord(current, pageSize, total),
          end: this.calculateLastRecord(current, pageSize, total),
          total
        })}
      </TablePaginationTextStyle>
    )
  }

  render () {
    return (
      <Fragment>
        <Table {...this.props} pagination={false} />
        <PaginationWrapperStyles>
          <RowComponent type='flex' justify='space-between'>
            <ColComponent span={8}>
              {this.renderPaginationText()}
            </ColComponent>
            <ColComponent span={16}>
              {this.renderPagination()}
            </ColComponent>
          </RowComponent>
        </PaginationWrapperStyles>
      </Fragment>
    )
  }
}

export default TableComponent
