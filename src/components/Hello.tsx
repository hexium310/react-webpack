/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

interface HelloProps {
  title: string;
}

const wrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'papayawhip',
  padding: 4 * 16,
});

const titleStyle = css({
  fontSize: '1.5em',
  color: '#3f51b5',
});

const contentStyle = css({
  color: '#f50057',
});

const buttonStyle = css({
  marginTop: 4 * 2,
});

export const Hello: React.FunctionComponent<HelloProps> = ({
  title,
}) => {
  const [number, setNumber] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setNumber((n) => n + 1);
  }, []);

  return (
    <section css={ wrapperStyle }>
      <div css={ titleStyle }>{ title }</div>
      <div css={ contentStyle }>Pa&apos;s wijze lynx bezag vroom het fikse aquaduct.</div>
      <button css={ buttonStyle } onClick={ handleClick }>{ number }</button>
    </section>
  );
};
