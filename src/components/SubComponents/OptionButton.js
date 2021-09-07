import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
  btn: {
    flex: 1,
    padding: 10,
    margin: 5,
    maxWidth: 400,
  },
}));

const optionsButton = ({ options, optionsHandler }) => {
  const classes = UseStyles();
  return (
    <div>
      {options.map((option) => (
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={() => optionsHandler(option)}
          key={option}
        >
          {decodeURIComponent(option)}
        </Button>
      ))}
    </div>
  );
};

export default optionsButton;
