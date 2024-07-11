import { createGlobalStyle } from 'styled-components'

export const MultipleStyle = createGlobalStyle`
  .dropdown-multiselect-menu {
    min-width: 273px;
    max-height: 300px;
    overflow-y: auto
  }

  .dropdown-menu-multiselect-divider-item:hover {
    background-color: #fff !important;
  }

  .dropdown-divider-horizontal {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
`
