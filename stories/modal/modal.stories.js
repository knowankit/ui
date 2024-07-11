import React from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import Modal from '../../src/admin/modal'

generateProps(Modal)

storiesOf('Modal', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Modal],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Modal
        title='Modal title'
        centered
        closable
        visible>
        <p>
          This is a long text. A very long text.
        </p>
      </Modal>
    )
  })
