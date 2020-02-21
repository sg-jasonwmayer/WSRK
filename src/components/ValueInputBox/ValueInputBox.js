/* eslint-disable no-unused-vars */
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  TextField,
  Button
}
from '@material-ui/core';



import './ValueInputBox.scss';






const ValueInputBox = () => {


  return(
    <div className="root" >
      <Button    className="value-button" variant="contained" href="#contained-buttons">
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
