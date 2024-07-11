import React from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import { number } from '@storybook/addon-knobs'
import Spin from '../../src/admin/spin'
import Alert from '../../src/admin/alert'

generateProps(Spin)

storiesOf('Spin', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Spin],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Spin
        delay={number('delay', 500)}
      />
    )
  })
  .add('with alert', () => {
    return (
      <Spin tip='Loading...'>
        <Alert
          message='Alert message title '
          description='Further details about the context of this alert.'
          type='info'
        />
      </Spin>
    )
  })
