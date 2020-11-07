import React from 'react';
import cntl from 'cntl';

interface HelloProps {
  title: string;
}

export const Hello: React.FunctionComponent<HelloProps> = ({
  title,
}) => {
  const [number, setNumber] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setNumber((n) => n + 1);
  }, []);

  return (
    <section className={ cntl`bg-gray-400 bg-opacity-25 flex flex-col items-center p-16` }>
      <div className={ cntl`text-2xl text-blue-600` }>{ title }</div>
      <div className={ cntl`text-red-600` }>Pa&apos;s wijze lynx bezag vroom het fikse aquaduct.</div>
      <button className={ cntl`bg-white border border-black border-solid mt-2 px-5 py-1 rounded` } onClick={ handleClick }>{ number }</button>
    </section>
  );
};
