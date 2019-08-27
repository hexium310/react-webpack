import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Hello } from 'components/Hello';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

export const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Hello title="Hello Component" />
    </>
  );
};
