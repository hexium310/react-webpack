import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';

import { Theme } from 'theme';

interface HelloProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'papayawhip',
    padding: theme.spacing(16),
  },
  title: {
    fontSize: '1.5em',
    color: theme.palette.primary.main,
  },
  content: {
    color: theme.palette.secondary.main,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export const Hello: React.FunctionComponent<HelloProps> = ({
  title,
}) => {
  const classes = useStyles();
  const [number, setNumber] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setNumber((n) => n + 1);
  }, []);

  return (
    <section className={ classes.wrapper }>
      <div className={ classes.title }>{ title }</div>
      <div className={ classes.content }>Pa&apos;s wijze lynx bezag vroom het fikse aquaduct.</div>
      <button className={ classes.button } onClick={ handleClick }>{ number }</button>
    </section>
  );
};
