import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from '../../src/admin/alert'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import { boolean } from '@storybook/addon-knobs'
import List from '../../src/admin/list'
import ListItem from '../../src/admin/list/item'

generateProps(Alert)

storiesOf('Alert', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Alert],
      propTablesExclude: [...[List, ListItem], ...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Alert
        message='Looking for something that is not in our list yet?'
        banner={boolean('banner', false)}
        closable={boolean('closable', false)}
        showIcon={boolean('showIcon', false)}
      />
    )
  })
