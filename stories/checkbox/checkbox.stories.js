import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import { boolean } from '@storybook/addon-knobs'
import Checkbox from '../../src/admin/checkbox'
import Spacing from '../story-components/spacing'

const plainOptions = ['Apple', 'Pear', 'Orange']

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
]

generateProps(Checkbox)

storiesOf('Checkbox', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Checkbox],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Checkbox
        autoFocus
        onChange={action('checked:onChange')}
      >
        Checkbox
      </Checkbox>
    )
  })
  .add('checkbox group', () => {
    return (
      <Fragment>
        <Checkbox.Group
          options={plainOptions}
          defaultValue={plainOptions[0]}
          onChange={action('checked:onChange')}
        />
        <Spacing />
        <Checkbox.Group
          options={options}
          disabled={boolean('disabled', true)}
          defaultValue={['Orange']}
          onChange={'checked:onChange'}
        />
      </Fragment>
    )
  })
