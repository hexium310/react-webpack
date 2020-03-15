/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';

import { Hello } from 'components/Hello';

const globalStyle = css({
  '*': {
    boxSizing: 'border-box',
  },
});

export const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Global styles={ globalStyle }/>
      <Hello title="Hello Component" />
    </React.Fragment>
  );
};
