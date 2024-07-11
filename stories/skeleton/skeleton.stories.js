import React from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import styled from 'styled-components'
import WrapperDecorator from '../decorators/wrapper-decorator'
import Center from '../story-components/component-wrapper'
import { boolean, number } from '@storybook/addon-knobs'
import Skeleton from '../../src/admin/skeleton'

const CustomWrapper = styled(Center)`
  background: #bfc2c3;
  width: 600px;
`
generateProps(Skeleton)

storiesOf('Skeleton', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(WrapperDecorator(CustomWrapper))
  .addParameters({
    info: {
      text: Doc,
      propTables: [Skeleton],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Skeleton
        active={boolean('active', true)}
        loading={boolean('loading', true)}
        avatar={boolean('avatar', true)}
        title={boolean('title', true)}
        paragraph={boolean('paragraph', true)}
        rows={number('rows', 2)}
      />
    )
  })
