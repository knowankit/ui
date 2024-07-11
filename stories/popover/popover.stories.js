import React from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import { action } from '@storybook/addon-actions'
import Popover from '../../src/admin/popover'
import Popconfirm from '../../src/admin/popover/confirm'
import { text } from '@storybook/addon-knobs'
import Button from '../../src/admin/button'

const content = (`Hello World`)

generateProps(Popover)

storiesOf('Popover', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Popover, Popconfirm],
      propTablesExclude: [Button, ...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Popover
        content={content}
        title='Title'
        trigger='hover'
      >
        <Button>Button</Button>
      </Popover>
    )
  }, {
    info: {
      propTables: [Popover]
    }
  })
  .add('confirm', () => {
    return (
      <Popconfirm
        title={text('title', 'Confirm Popup')}
        okText={text('okText', 'Yes')}
        cancelText={text('cancelText', 'No')}
        onConfirm={action('Popconfirm:Says Yes')}
        onCancel={action('Popconfirm:Says No')}
        trigger={text('trigger', 'click')}
      >
        <Button>Button</Button>
      </Popconfirm>
    )
  }, {
    info: {
      propTables: [Popconfirm]
    }
  })
