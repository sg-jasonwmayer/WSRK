import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const ValueInputBox = () => {
  const classes = useStyles();

  return(
    <div className='classes.root'>
      <Button variant="contained" href="#contained-buttons">
        Apply Criteria
      </Button>
       <Button variant="contained" href="#contained-buttons">
        Discard
      </Button>
      <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Value" variant="outlined" />
      </form>
    </div>   
  )
}

export default ValueInputBox;