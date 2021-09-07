import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearBuffer({
  score,
  totalQuestions,
  questionNumber,
}) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    setProgress((score / totalQuestions) * 100);
    setBuffer(((totalQuestions - score) / totalQuestions) * 100);
  }, [questionNumber]);
  return (
    <div className={classes.root}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </div>
  );
}
