import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  progress: {
    margin: 'auto',
    width: '90%',
  },
});

export default function LinearWithValueLabel({
  questionNumber,
  totalQuestions,
}) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    setProgress(
      (questionNumber == 1 ? 0 : questionNumber / totalQuestions) * 100
    );
  }, [questionNumber]);

  return (
    <div className={classes.progress}>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}
