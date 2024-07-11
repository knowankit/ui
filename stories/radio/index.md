# Usage

## Radio

## Radio with all the propTypes
```jsx
  import Radio from 'ui/dist/admin/radio'

  <Radio 
    autoFocus={...props | optional}
    checked={...props | optional}
    defaultChecked={...props | optional}
    disabled={...props | optional}
    onChange={this.onRadioChange}
  >
    Radio 
  </Radio>
```

## Radio Group with all the propTypes
```jsx
  import Radio from 'ui/dist/admin/radio'

  <Radio.Group 
    disabled={...props | optional}
    name={...props | optional}
    options={...props | optional}
    onChange={this.onRadioChange}
  >
    <Radio value={...props | optional}>{options}</Radio>
    <Radio value={...props | optional}>{options}</Radio>
    <Radio value={...props | optional}>{options}</Radio>
  </Radio.Group>

  <Radio.Group 
    disabled={...props | optional}
    name={...props | optional}
    options={...props | optional}
    onChange={this.onRadioChange}
  >
    <Radio.Button value={...props | optional}>{options}</Radio.Button>
    <Radio.Button value={...props | optional}>{options}</Radio.Button>
    <Radio.Button value={...props | optional}>{options}</Radio.Button>
  </Radio.Group>
```
