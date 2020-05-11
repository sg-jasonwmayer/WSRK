import React from 'react';
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
=======

>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';

<<<<<<< HEAD
const useStyles = makeStyles();
=======
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722

const CriteriaDropDown = () => {
    const [value, setValue] = React.useState('');  
    const handleChange = event => {   
      setValue(event.target.value);
    };

    return(
      <div 
        className='classes.root'
      >
        <FormControl 
          component="fieldset" 
          className="form-control"
        >
          <RadioGroup 
            aria-label="" 
            name="" 
            value={value} 
            onChange={handleChange}
          >
            <FormControlLabel 
              value="StartingWith" 
              control={<Radio />} 
              label="Starting Width" 
            />
            <FormControlLabel 
              value="Containing" 
              control={<Radio />} 
              label="Containing" 
            />
            <FormControlLabel 
              value="EndingWidth" 
              control={<Radio />} 
              label="Ending Width" 
            />
            </RadioGroup>
        </FormControl>
      </div>   
    )
}

export default CriteriaDropDown;