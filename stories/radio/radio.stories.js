import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import { boolean, text } from '@storybook/addon-knobs'
import Spacing from '../story-components/spacing'
import Radio from '../../src/admin/radio'

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
]

generateProps(Radio)

storiesOf('Radio', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Radio],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Radio
        autoFocus={boolean('autoFocus', true)}
        defaultChecked={boolean('defaultChecked', false)}
        checked={boolean('checked', false)}
        disabled={boolean('disabled', false)}
        onChange={action('checked:onChange')}
      >
        Radio
      </Radio>
    )
  })
  .add('radio group', () => {
    return (
      <Fragment>
        <h3>Radio.Group group - optional</h3>
        <Radio.Group
          options={options}
        />
        <Spacing />
        <Spacing />

        <h3>Radio.Group with name</h3>
        <Radio.Group
          name='radiogroup'
          defaultValue={1}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>

        <Spacing />
        <Spacing />

        <h3>Radio button</h3>
        <Radio.Group
          size={text('size', 'default')}
          defaultValue='a'
          buttonStyle={text('buttonStyle', 'outlined')}>
          <Radio.Button value='a'>Hangzhou</Radio.Button>
          <Radio.Button value='b'>Shanghai</Radio.Button>
          <Radio.Button value='c'>Beijing</Radio.Button>
          <Radio.Button value='d'>Chengdu</Radio.Button>
        </Radio.Group>
      </Fragment>
    )
  })
