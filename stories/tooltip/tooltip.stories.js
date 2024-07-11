import React from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import Tooltip from '../../src/admin/tooltip'

generateProps(Tooltip)

storiesOf('Tooltip', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Tooltip],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Tooltip
        title='prompt text'
        defaultVisible>
        <span>Tooltip will show when mouse enter.</span>
      </Tooltip>
    )
  })
