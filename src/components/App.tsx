import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';

import { Hello } from 'components/Hello';

const useStyles = makeStyles(() => createStyles({
  root: {
    boxSizing: 'border-box',
  },
}));

export const App: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <Hello title="Hello Component" />
    </div>
  );
};
