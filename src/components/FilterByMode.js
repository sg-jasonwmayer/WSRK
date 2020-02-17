import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,

  Menu,
  MenuItem
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
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


const FilterByMode = () => {

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
                  value="All" 
                  control={<Radio />} 
                  label="All" 
                />
                <FormControlLabel 
                  value="Truck" 
                  control={<Radio />} 
                  label="Truck" 
                /> 
                <FormControlLabel 
                  value="Rail" 
                  control={<Radio />} 
                  label="Rail" 
                />
                <FormControlLabel 
                  value="Container" 
                  control={<Radio />} 
                  label="Container" 
                />
                <FormControlLabel 
                  value="ContainerOnChasis" 
                  control={<Radio />} 
                  label="Container On Chasis" 
                />
             </RadioGroup>
              </FormControl>
      </div>   
    )
}

export default FilterByMode;