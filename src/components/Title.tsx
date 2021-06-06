import { FC } from 'react';
import cntl from 'cntl';

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({
  title,
}) => {
  return (
    <h2 className={ cntl`text-4xl text-center` }>{ title }</h2>
  );
};

export default Title;
