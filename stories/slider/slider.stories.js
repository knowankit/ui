import React from 'react'
import { storiesOf } from '@storybook/react'
import Slider from '../../src/admin/slider'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import List from '../../src/admin/list'
import ListItem from '../../src/admin/list/item'

generateProps(Slider)

storiesOf('Slider', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Slider],
      propTablesExclude: [...[List, ListItem], ...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Slider
        defaultValue={25}
      />
    )
  })
