import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProgressBar from './SubComponents/ProgressBar';
import ProgressCircularScoreMax from './SubComponents/ProgressCircularScoreMax';
import ProgressCircularScore from './SubComponents/ProgressCircularScore';
import ProgressBuffer from './SubComponents/ProgressBuffer';
import Buttons from './SubComponents/OptionButton';
import Rating from './SubComponents/Rating';
import Status from './SubComponents/Status';

const UseStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    marginTop: '2vh',
    display: 'flex',
    flexFlow: 'column',
    minWidth: 400,
    maxWidth: 800,
    minHeight: 300,
  },
  content: {
    textAlign: 'center',
  },
  btncontainer: {
    flex: 1,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    marginLeft: 80,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomContainer: {
    display: 'flex',
    flexFlow: 'row',
  },
  scoreProgress: {
    alignSelf: 'flex-start',
  },
  maxScoreProgress: {
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
}));

export default function questionCard({
  questionNumber,
  nextHandler,
  question,
  totalQuestions,
  optionsHandler,
  status,
  score,
}) {
  const classes = UseStyles();
  const title = `Question ${questionNumber} of ${totalQuestions}`;

  return (
    <Card className={classes.root}>
      <ProgressBar
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
      />
      <CardHeader className={classes.content} title={title} />
      <CardHeader
        className={classes.content}
        title={decodeURIComponent(question.category)}
        subheader="Category"
      />
      <CardHeader
        className={classes.content}
        title={Rating(question.difficulty)}
        subheader="Difficulty"
      ></CardHeader>
      <CardContent>
        <Typography className={classes.question} paragraph>
          Question:
        </Typography>
        <Typography className={classes.content} paragraph>
          {decodeURIComponent(question.question)}
        </Typography>
      </CardContent>
      <CardContent className={classes.btncontainer}>
        <Buttons
          optionsHandler={optionsHandler}
          options={[
            ...question['incorrect_answers'],
            question['correct_answer'],
          ]}
        />
      </CardContent>
      <CardContent className={classes.btncontainer}>
        <Status status={status} />
        <Button variant="contained" color="secondary" onClick={nextHandler}>
          Next
        </Button>
      </CardContent>
      <CardContent className={classes.bottomContainer}>
        <CardContent className={classes.scoreProgress}>Score:</CardContent>
        <ProgressCircularScore
          totalQuestions={totalQuestions}
          score={score}
          className={classes.scoreProgress}
        />
        <CardContent className={classes.maxScoreProgress}>
          Max Score:
        </CardContent>
        <ProgressCircularScoreMax
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
          score={score}
          className={classes.maxScoreProgress}
        />
      </CardContent>
      <CardContent>
        <ProgressBuffer
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
          score={score}
        />
      </CardContent>
    </Card>
  );
}
