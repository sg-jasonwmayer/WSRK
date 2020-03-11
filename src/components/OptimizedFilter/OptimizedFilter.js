import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Menu
} from '@material-ui/core';

import './OptimizedFilter.scss';


const OptimizedFilter = () => {
   
    const [value, setValue] = React.useState('');  
    const handleChange = event => {   
      setValue(event.target.value);
    };

    return(
      <div className="root">
        <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}

  />
        <FormControl component="fieldset" className="form-control">
          <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
            <FormControlLabel 
              value="IncludeBoth" 
              control={<Radio />} 
              label="Include Both" 
            />
            <FormControlLabel 
              value="OptimizedOnly" 
              control={<Radio />} 
              label="Optimized Only" 
            />
            <FormControlLabel 
              value="UnOptimizedOnly" 
              control={<Radio />} 
              label="UnOptimized Only" 
            />
          </RadioGroup>
        </FormControl>
      </div>   
    )
}

export default OptimizedFilter;