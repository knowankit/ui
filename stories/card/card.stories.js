import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../../src/admin/card'
import Icon from '../../src/admin/icon'
import Avatar from '../../src/admin/avatar'
import Row from '../../src/admin/row'
import Col from '../../src/admin/col'
import generateProps from './index.docgen'
import Doc from './index.md'
import excludeNode from '../global-prop-table-excludes'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const cardActions = [
  <Icon type='setting' key='setting' />,
  <Icon type='edit' key='edit' />,
  <Icon type='ellipsis' key='ellipsis' />
]

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1'
  },
  {
    key: 'tab2',
    tab: 'tab2'
  }
]

const contentList = {
  tab1: <p>content</p>,
  tab2: <p>content</p>
}

generateProps(Card)

storiesOf('Card', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Card],
      propTablesExclude: [...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Card
        title='Default card'
        extra={<a href='#'>More</a>}
        style={{ width: 300 }}
        actions={cardActions}
      >
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </Card>
    )
  })
  .add('with customized content', () => {
    return (
      <Card
        style={{ width: 300 }}
        cover={<img alt='example' src='https://picsum.photos/id/866/200' />}>
        <Card.Meta title='Example title' description='www.lorem.ipsum' />
      </Card>
    )
  })
  .add('with tabs', () => {
    return (
      <Card
        style={{ width: 600 }}
        tabList={tabList}
        onTabChange={action('onTabChange')}
        defaultActiveTabKey={text('defaultActiveTabKey', 'tab1')}
        activeTabKey={text('activeTabKey', 'tab1')}>
        {contentList.tab1}
      </Card>
    )
  })
  .add('cards in column', () => {
    return (
      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt='example' src='https://picsum.photos/id/866/200' />}
            actions={cardActions}>
            <Card.Meta
              avatar={<Avatar src='https://picsum.photos/id/866/200' />}
              title='Card title'
              description='This is the description'
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt='example' src='https://picsum.photos/id/866/200' />}
            actions={cardActions}>
            <Card.Meta
              avatar={<Avatar src='https://picsum.photos/id/866/200' />}
              title='Card title'
              description='This is the description'
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt='example' src='https://picsum.photos/id/866/200' />}
            actions={cardActions}>
            <Card.Meta
              avatar={<Avatar src='https://picsum.photos/id/866/200' />}
              title='Card title'
              description='This is the description'
            />
          </Card>
        </Col>
      </Row>
    )
  })
