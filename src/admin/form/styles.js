import { createGlobalStyle } from 'styled-components'

export const FormStyle = createGlobalStyle`
  .ant-form-item-label {
    label {
      &:before,
      &:after {
        content: "";
      }
    }
  }
  .ant-list-item-meta-content {
    flex: 1 0 auto; // IE fix for List.Meta, where flex-basis is set to 0px if not defined
  }
  label.ant-form-item-required {
    &:after {
      content: "*";
      color: #03a9f4;
      font-size: 18px;
    }
  }
`
