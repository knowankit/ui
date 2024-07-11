# Usage

## Checkbox
```jsx
  import Checkbox from 'ui/dist/admin/Checkbox'

  <Checkbox onChange={this.onChange} >
    Checkbox 
  </Checkbox>
```

## Checkbox with all the propTypes
```jsx
  import Checkbox from 'ui/dist/admin/Checkbox'

  <Checkbox 
    autoFocus	
    checked
    defaultChecked
    disabled
    indeterminate
    onChange={this.onCheckboxChange}
  >
    Checkbox 
  </Checkbox>
```

## Checkbox Group with all the propTypes
```jsx
  import Checkbox from 'ui/dist/admin/Checkbox'

  <Checkbox.Group 
    defaultChecked
    disabled
    name
    options
    value
    onChange={this.onCheckboxChange}
  />
```

## Checkbox Group
## Note: Following code snippet can be used to demonstrate the prop manipulation of the checkbox group
```jsx
  import React, { Fragment } from 'react'
  import Checkbox from 'ui/dist/admin/Checkbox'

  const plainOptions = ['Apple', 'Pear', 'Orange'];
  
  class CheckBoxGroupComp extends React.Component {
    state = {
      checkedList: [],
      checkAll: false
    };

    onChange = checkedList => {
      this.setState({
        checkedList,
        checkAll: checkedList.length === plainOptions.length,
      });
    };

    onCheckAllChange = e => {
      this.setState({
        checkedList: e.target.checked ? plainOptions : [],
        checkAll: e.target.checked
      });
    };

    render() {
      return (
        <Fragment>
          <Checkbox 
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
          <br />
          <Checkbox.Group
            options={plainOptions}
            value={this.state.checkedList}
            onChange={this.onChange}
          />
        </Fragment>
      )
    }
  }
  export default CheckBoxGroupComp;
```