import React from 'react';
import cntl from 'cntl';

import Title from 'components/Title';
import Content from 'components/Content';

export const App: React.FC = () => {
  return (
    <main className={ cntl`flex flex-col h-screen justify-center items-center` }>
      <Title title="BOILERPLATE" />
      <Content />
    </main>
  );
};
