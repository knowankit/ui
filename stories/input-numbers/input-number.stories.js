import React from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import { action } from '@storybook/addon-actions'
import { number, boolean } from '@storybook/addon-knobs'
import InputNumber from '../../src/admin/input-number'

generateProps(InputNumber)

storiesOf('InputNumber', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [InputNumber],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <InputNumber
        autoFocus
        min={number('min', 1)}
        max={number('max', 100)}
        defaultValue={number('defaultValue', 3)}
        precision={number('precision', 1)}
        value={number('value', 3)}
        disabled={boolean('disabled', false)}
        onChange={action('inputNumber: onChange')}
      />
    )
  })
