# Card
```jsx
  import Card from 'ui/dist/admin/card'
  <Card title={ ...props | optional }>Card content</Card>
```

```jsx
  import Card from 'ui/dist/admin/card'
  <Card title={ ...props | optional } extra={<a href='#'>More</a>} >
    <p>Card content</p>
  </Card>
```

## Card with Customized content
```jsx
  import Card from 'ui/dist/admin/card'
  import Avatar from 'ui/dist/admin/avatar'
  import Icon from 'ui/dist/admin/icon'
  const { Meta } = Card;

  <Card
    loading={ ...props | optional }
    cover={
      <img
        alt='example'
        src='https://picsum.photos/id/866/200/300'
      />
    }
    actions={[
      <Icon type='setting' key='setting' />,
      <Icon type='edit' key='edit' />,
      <Icon type='ellipsis' key='ellipsis' />,
    ]}
  >
    <Meta
      avatar={<Avatar src='https://picsum.photos/id/866/200/300' />}
      title='Card title'
      description='This is the description'
    />
  </Card>
```

## Card with Tabs
## Note: We can change tab contents using the `key` state, which will reflect change of content with selected tab
```jsx
  import React from 'react'
  import Card from 'ui/dist/admin/card'

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

  class TabsCard extends React.Component {
    state = {
      key: 'tab1'
    };

    onTabChange = (key) => {
      this.setState({ key: key });
    };

    render() {
      return (
        <Card
          tabList={ ...props }
          defaultActiveTabKey={ this.state.key }
          activeTabKey={ this.state.key } 
          onTabChange={ key => {this.onTabChange(key)} }>
          {contentList[this.state.key]}
        </Card>
      )
    }
  }
  export default TabsCard;
```