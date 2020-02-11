import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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
            <form className={classes.root} noValidate autoComplete="off">
                value
                <TextField id="outlined-basic" label="Value" variant="outlined" />
            </form>
        </div>   
    )
}

export default ValueInputBox;