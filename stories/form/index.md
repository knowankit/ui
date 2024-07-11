# Usage

```jsx
  import Form from 'ui/dist/admin/form'
  import FormItem from 'ui/dist/admin/form/item'
  <Form>
    <FormItem
      label={...props}
      validateStatus={...props | ''}
      help={...props}
      required optional
    >
      <Components />
    </FormItem>
    <FormItem>
      <Components />
    </FormItem>
  </Form>
```