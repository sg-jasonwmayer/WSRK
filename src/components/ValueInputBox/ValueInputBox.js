/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button}
   from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './ValueInputBox.scss';

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
    <div className="value-inputbox" >
      <Button
       className="value-button" 
       variant="contained" 
       href="#contained-buttons"
       >
        Apply Criteria
      </Button>
       <Button
       className="value-button"
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        href="#contained-buttons">
        Discard
      </Button>
      <form className='value-input' noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Value" variant="outlined" />
      </form>
    </div>
  )
}

export default ValueInputBox;
