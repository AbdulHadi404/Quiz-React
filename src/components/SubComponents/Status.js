import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Status = ({ status }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {status != null && status == 'Correct Answer' ? (
        <Alert severity="success">Correct Answer — Great Success!</Alert>
      ) : status == 'Sorry!' ? (
        <Alert severity="warning">Sorry — Wrong Answer :</Alert>
      ) : null}
      <br />
    </div>
  );
};
export default Status;
