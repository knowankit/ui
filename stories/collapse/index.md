# Usage

## Collapse 
```jsx
  import Collapse from 'ui/dist/admin/collapse'
  import Panel from 'ui/dist/admin/collapse/panel'

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  <Collapse 
    defaultActiveKey={['1']}
    onChange={this.onCollapseChange} >
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
  </Collapse>
```

## Collapse with all the propTypes
```jsx
  import Collapse from 'ui/dist/admin/collapse'
  import Panel from 'ui/dist/admin/collapse/panel'

  <Collapse 
    activeKey	
    defaultActiveKey
    bordered
    accordion
    expandIconPosition	
    destroyInactivePanel
    onChange={this.onCollapseChange}
  >
    <Panel 
      header="This is panel header 1" 
      key="1"
      disabled
      forceRender
      showArrow
      extra>
      <p>text</p>
    </Panel>
  </Checkbox>
```