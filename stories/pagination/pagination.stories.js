import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Pagination from '../../src/admin/pagination'

function showTotal (total) {
  return `Total ${total} items`
}

function itemRender (current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>
  }
  if (type === 'next') {
    return <a>Next</a>
  }
  return originalElement
}

generateProps(Pagination)

storiesOf('Pagination', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Pagination],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Pagination
        total={500}
        defaultCurrent={6}
        current={6}
        simple={boolean('simple', false)}
        showTotal={showTotal}
        showTitle={boolean('showTitle', true)}
        pageSize={20}
        disabled={boolean('disabled', false)}
        onChange={action('pagination:onChange')}
        onShowSizeChange={action('pageChange:onShowSizeChange')}
      />
    )
  })
  .add('with Prev and next', () => {
    return (
      <Fragment>
        <Pagination
          total={500}
          itemRender={itemRender}
        />
      </Fragment>
    )
  })
