import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { Name } from 'components/name'
import { Links } from 'components/links'
import { Description } from 'components/description'

const App = () => {
  return (
    <Wrapper>
      <Name />
      <Description />
      <Links />
    </Wrapper>
  )
}

export default App
