import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Hello } from './Hello';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

export const App: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Hello title="Hello Component" />
    </>
  )
};
