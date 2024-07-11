import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import { number } from '@storybook/addon-knobs'
import WrapperDecorator from '../decorators/wrapper-decorator'
import Center from '../story-components/component-wrapper'
import Progress from '../../src/admin/progress'
import Tooltip from '../../src/admin/tooltip'
import Spacing from '../story-components/spacing'

const CustomWrapper = styled(Center)`
  width: 600px;
`

generateProps(Progress)

storiesOf('Progress', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(WrapperDecorator(CustomWrapper))
  .addParameters({
    info: {
      text: Doc,
      propTables: [Progress],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Progress
        percent={number('percent', 30)}
        successPercent={number('successPercent', 10)}
        strokeWidth={number('strokeWidth', 10)}
        width={number('width', 132)}
      />
    )
  })
  .add('progress with tooltip', () => {
    return (
      <Fragment>
        <Tooltip title='3 done / 3 in progress / 4 to do'>
          <Progress percent={60} successPercent={30} />
        </Tooltip>
        <Spacing />
        <Tooltip title='3 done / 3 in progress / 4 to do'>
          <Progress percent={60} successPercent={30} type='circle' />
        </Tooltip>
      </Fragment>
    )
  })
