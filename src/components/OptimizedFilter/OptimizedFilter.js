import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Menu
} from '@material-ui/core';

import './OptimizedFilter.scss';

const useStyles = makeStyles(theme => ({
  formControl: {
  },
}));

// eslint-disable-next-line no-unused-vars
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
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
    {...props}
  />
));

const OptimizedFilter = () => {
   
    const classes = useStyles();
    const [value, setValue] = React.useState('');  
    const handleChange = event => {   
      setValue(event.target.value);
    };

    return(
      <div className='classes.root'>
        <FormControl component="fieldset" className={classes.formControl}>
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