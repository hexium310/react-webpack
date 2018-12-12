import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Content = styled.div`
  text-align: center;
`

export default class extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>App Component</Title>
        <Content>Pa&apos;s wijze lynx bezag vroom het fikse aquaduct.</Content>
      </Wrapper>
    )
  }
}
