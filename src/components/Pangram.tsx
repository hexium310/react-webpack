import { FC } from 'react';
import cntl from 'cntl';

type PangramProps = {
  textDirection?: 'horizontal' | 'veritical' ;
}

const Pangram: FC<PangramProps> = ({ textDirection = 'horizontal', children }) => {
  return (
    <div className={ cntl`
      ${textDirection === 'horizontal' ? 'horizontal-writing' : 'vertical-writing'}
    ` }>
      { children }
    </div>
  );
};

export default Pangram;
