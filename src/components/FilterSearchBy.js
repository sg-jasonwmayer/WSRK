import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Menu
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


const FilterSearchBy = () => {
   
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
              value="ShipTo" 
              control={<Radio />} 
              label="Ship To" 
            />
            <FormControlLabel 
              value="BatchID" 
              control={<Radio />} 
              label="BatchID" 
            /> 
            <FormControlLabel 
              value="OrderNumber" 
              control={<Radio />} 
              label="Order Number" 
            />   
            <FormControlLabel 
              value="LoadPlanName" 
              control={<Radio />} 
              label="Load Plan Name" 
            />
            <FormControlLabel 
              value="Reference" 
              control={<Radio />} 
              label="Reference" 
            />
            <FormControlLabel 
              value="ShippingReference" 
              control={<Radio />} 
              label="Shipping Reference" 
            />
            <FormControlLabel 
              value="LastVehicleWeight%lessThan" 
              control={<Radio />} 
              label="Last Vehicle Weight (%) Less Than" 
            />
            <FormControlLabel 
              value="LastVehicleVolume(%)lessThan" 
              control={<Radio />} 
              label="Last Vehicle Volume (%) Less Than" 
            />
            <FormControlLabel 
              value="Diameter" 
              control={<Radio />} 
              label="Diameter" 
            />
            <FormControlLabel 
              value="Width" 
              control={<Radio />} 
              label="Width" 
            />
          </RadioGroup>
        </FormControl>
      </div>   
    )
}

export default FilterSearchBy;