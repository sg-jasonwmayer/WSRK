/* eslint-disable no-unused-vars */
import React from 'react';
import {
  TextField,
  Button,
  Grid
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './ValueInputBox.scss';

const ValueInputBox = () => {

  return(
    <div className="root" >
      <form className='value-input' noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Value" variant="outlined" />
      </form>
      <Button className="value-button" variant="contained" href="#contained-buttons">
        Search
      </Button>
    </div>
  )
}

export default ValueInputBox;
