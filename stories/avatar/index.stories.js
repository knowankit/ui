import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import Avatar from '../../src/admin/avatar'
import Badge from '../../src/admin/badge'
import Spacing from '../story-components/spacing'

generateProps(Avatar)

storiesOf('Avatar', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Avatar],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return <Avatar icon='user' alt={text('alt', 'user')} onError={action('avatarOnError')} />
  })
  .add('types', () => {
    return (
      <Fragment>
        <Avatar
          icon={text('icon', 'user')}
          style={{ marginRight: 16 }}
          size={text('size', 'large') || number('size', 30)}
          alt={text('alt', 'user')}
          onError={action('avatarOnError')}
        />
        <Avatar
          src={text('src', 'https://picsum.photos/200')}
          style={{ marginRight: 16 }}
          size={text('size', 'default') || number('size', 30)}
          alt={text('alt', 'user')}
          onError={action('avatarOnError')}
        />
        <Avatar size={text('size', 'large') || number('size', 30)} >
          USER
        </Avatar>
      </Fragment>
    )
  })
  .add('with badge', () => {
    return (
      <Fragment>
        <Badge count={text('count', 3)}>
          <Avatar shape='square' icon='mail' alt={text('icon', 'mail')} />
        </Badge>
        <Spacing />
        <Badge dot>
          <Avatar shape='square' icon='user' alt={text('icon', 'user')} />
        </Badge>
      </Fragment>
    )
  })
