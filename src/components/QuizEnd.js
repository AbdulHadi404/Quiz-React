import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const UseStyles = makeStyles({
  root: {
    // display: 'flex',
    marginTop: '25vh',
    margin: 'auto',
    maxWidth: 400,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function quizEnd({ restartQuiz }) {
  const classes = UseStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Thank you for taking the Quiz!
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Press restart to retake the Quiz
        </Typography>
        <Button onClick={restartQuiz} variant="contained" color="secondary">
          Restart
        </Button>
      </CardContent>
    </Card>
  );
}
