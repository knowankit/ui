import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Form from '../../src/admin/form'
import FormItem from '../../src/admin/form/item'
import Input from '../../src/admin/input'
import Button from '../../src/admin/button'
import { text, boolean } from '@storybook/addon-knobs'
import excludeNode from '../global-prop-table-excludes'
import WrapperDecorator from '../decorators/wrapper-decorator'
import generateProps from './index.docgen'
import Doc from './index.md'

const WrapperStyle = styled(Form)`
  .ant-form-explain {
    color: #fff;
  }
  .has-error .ant-form-explain {
    color: #f5222d;
  }
`

generateProps(Form)

storiesOf('Form', module)
  .addDecorator(WrapperDecorator(WrapperStyle))
  .addParameters({
    info: {
      text: Doc,
      propTables: [Form],
      propTablesExclude: [Input, Button, styled, Form.Item, WrapperStyle, ...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Form>
        <FormItem
          label='UI Title'
          validateStatus={text('Is Error', 'error')}
          help='Cannot be blank'
          required={text('Required', 'required')}
        >
          <Input
            id='input-1'
            type='text'
            placeholder={text('Placeholder', 'Title')}
            name='name'
            size={text('Inputbox Size', 'large')}
            disabled={boolean('Disabled', false)}
          />
        </FormItem>
        <FormItem>
          <Button
            type='primary'
            size={text('Button Size', 'default')}
            htmlType='submit'
          >
            Submit
          </Button>
          <Button
            type='default'
            size={text('Button Size', 'default')}
          >
            Cancel
          </Button>
        </FormItem>
      </Form>
    )
  })
