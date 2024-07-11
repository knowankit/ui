import React from 'react'
import Center from '../story-components/component-wrapper'
import Grid from '../story-components/helper-grid'

const WrapperDecorator = (Wrapper = Center) => (storyFn) => (
  <Wrapper>
    <Grid />
    {storyFn()}
  </Wrapper>
)

export default WrapperDecorator
