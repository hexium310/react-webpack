import React from 'react';
import styled from 'styled-components';

interface HelloProps {
  title: string;
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Content = styled.div`
`;

const Button = styled.button`
  margin-top: 10px;
`;

export const Hello: React.FunctionComponent<HelloProps> = ({
  title,
}): React.ReactElement => {
  const [number, setNumber] = React.useState(0);

  return (
    <Wrapper>
      <Title>{ title }</Title>
      <Content>Pa&apos;s wijze lynx bezag vroom het fikse aquaduct.</Content>
      <Button onClick={ () => setNumber(number + 1) }>{ number }</Button>
    </Wrapper>
  )
};
