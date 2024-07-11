import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { text, boolean } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import WrapperDecorator from '../decorators/wrapper-decorator'
import generateProps from './index.docgen'
import Spacing from '../story-components/spacing'
import Doc from './index.md'
import Button from '../../src/admin/button'
import List from '../../src/admin/list'
import Center from '../story-components/component-wrapper'
import IconButton from '../../src/admin/button/iconButton'

const groups = ['default', 'primary', 'dashed', 'danger']
const CustomWrapper = styled(Center)`
  width: 600px;
`

generateProps(Button)

storiesOf('Button', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(WrapperDecorator(CustomWrapper))
  .addParameters({
    info: {
      text: Doc,
      propTables: [Button],
      propTablesExclude: [...[List, List.Item, CustomWrapper], ...excludeNode]
    }
  })
  .add('with all props customizable', () => {
    return <Button>
      {text(`${groups[0]} Text`, 'Default')}
    </Button>
  })
  .add('icon buttons', () => {
    return <IconButton
      type={text(`${groups[0]} Type`, 'primary', groups[0])}
      icon={text(`${groups[0]} Icon`, 'cloud', groups[0])}
      position={text(`${groups[0]} Position`, 'left', groups[0])}
      value={text(`${groups[0]} Value`, 'Button', groups[0])}
    />
  })
  .add('types', () => {
    return (
      <Fragment>
        <Button
          disabled={boolean(`${groups[0]} Disabled`, false, groups[0])}
          ghost={boolean(`${groups[0]} Ghost`, false, groups[0])}
          loading={boolean(`${groups[0]} Loading`, false, groups[0])}
          block={boolean(`${groups[0]} Block`, false, groups[0])}
          type='default'
        >
          {text(`${groups[0]} Text`, 'Default', groups[0])}
        </Button>
        <Spacing />
        <Button
          disabled={boolean(`${groups[1]} Disabled`, false, groups[1])}
          ghost={boolean(`${groups[1]} Ghost`, false, groups[1])}
          loading={boolean(`${groups[1]} Loading`, false, groups[1])}
          block={boolean(`${groups[1]} Block`, false, groups[1])}
          type='primary'
        >
          {text(`${groups[1]} Text`, 'Primary', groups[1])}
        </Button>
        <Spacing />
        <Button
          disabled={boolean(`${groups[2]} Disabled`, false, groups[2])}
          ghost={boolean(`${groups[2]} Ghost`, false, groups[2])}
          loading={boolean(`${groups[2]} Loading`, false, groups[2])}
          block={boolean(`${groups[2]} Block`, false, groups[2])}
          type='dashed'
        >
          {text(`${groups[2]} Text`, 'Dashed', groups[2])}
        </Button>
      </Fragment>
    )
  })
  .add('sizes', () => {
    return (
      <List
        bordered
        dataSource={['small', 'default', 'large']}
        renderItem={type =>
          <List.Item>
            <Button
              size={type}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          </List.Item>
        }
      />
    )
  })
