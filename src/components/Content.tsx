import React from 'react';
import cntl from 'cntl';

import Pangram from 'components/Pangram';

const Dutch: React.ReactElement = <Pangram>Pa&apos;s wijze lynx bezag vroom het fikse aquaduct.</Pangram>;
const English: React.ReactElement = <Pangram>The quick brown fox jumps over the lazy dog.</Pangram>;
const Japanese: React.ReactElement = (
  <Pangram textDirection="veritical">
    <p>いろはにほへと</p>
    <p>ちりぬるをわか</p>
    <p>よたれそつねな</p>
    <p>らむうゐのおく</p>
    <p>やまけふこえて</p>
    <p>あさきゆめみし</p>
    <p>ゑいもせす</p>
  </Pangram>
);

const pangrams: { [s: string]: { component: React.ReactElement, native: string } } = {
  dutch: {
    component: Dutch,
    native: 'Nederlands',
  },
  english: {
    component: English,
    native: 'English',
  },
  japanese: {
    component: Japanese,
    native: '日本語',
  },
};

const Content: React.FC = () => {
  const [language, setLanguage] = React.useState('english');

  const changeLanguage= React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setLanguage(event.currentTarget.value);
  }, []);

  return (
    <>
      <div>
        {
          Object.entries(pangrams).map(([lang, { native }]) => (
            <button
              key={ lang }
              className={ cntl`
                ${lang === language ? 'bg-blue-200' : ''}
                button
              ` }
              value={ lang }
              onClick={ changeLanguage }
            >
              { native }
            </button>
          ))
        }
      </div>
      <section className={ cntl`text-lg m-4 h-40 w-1/2 bg-gray-400 bg-opacity-25 flex flex-col items-center p-4` }>
        { pangrams[language].component }
      </section>
    </>
  );
};

export default Content;
