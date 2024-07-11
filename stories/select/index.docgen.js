export default Component => {
  Component.__docgenInfo = {
    props: {
      defaultValue: {
        type: {
          name: 'string'
        },
        description: 'Default selected value from the select options'
      },
      onChange: {
        type: { name: 'function' },
        description: 'Select component onChange callback'
      },
      style: {
        type: { name: 'object' },
        description: 'Inline style properties. While we discourage having inline style props for some very special usecases, the option is provided.'
      },
      disabled: {
        type: { name: 'bool' },
        description: 'Add disable attr to select/option components'
      },
      dataSourceGroups: {
        type: {
          name: 'array'
        },
        required: true,
        description: 'Array of objects to render',
        computed: false
      },
      visible: {
        type: { name: 'bool' },
        required: true,
        description: 'Controls dropdown visibility',
        computed: true
      },
      placeholder: {
        type: { name: 'string' },
        required: false,
        description: 'Placeholder for search'
      },
      onSearchChange: {
        type: { name: 'function' },
        required: true,
        description: 'On search callback'
      },
      onVisibleChange: {
        type: { name: 'function' },
        required: true,
        description: 'On visible callback'
      },
      onSuffixIconClick: {
        type: { name: 'function' },
        required: true,
        description: 'On suffix icon click callback'
      }
    },
    description: 'SelectMultiple Component'
  }
}
