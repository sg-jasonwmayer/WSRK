import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

const ColumnsToInclude = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState('female');
  
    const handleChange = event => {
      setValue(event.target.value);
    };

    return(
        <div className='classes.root'>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Columns to Include in Selection Data Grid</FormLabel>
                <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
                    <FormControlLabel value="IncludeBoth" control={<Radio />} label="Interfaced Date" />
                    <FormControlLabel value="OptimizedOnly" control={<Radio />} label="Interfaced User" />
                    <FormControlLabel  value="OptimizedUser" control={<Radio />} label="Optimized User" />
                    <FormControlLabel  value="CustPreference" control={<Radio />} label="IMill/Cust Preference" />
                    <FormControlLabel  value="LastVehicleWT" control={<Radio />} label="Last Vehicle Wt % Utilized" />
                    <FormControlLabel  value="LastVehicleVol" control={<Radio />} label="Last Vehicle Vol % Utilized" />
                    <FormControlLabel  value="TotalRolls" control={<Radio />} label="Total Rolls" />
                    <FormControlLabel  value="TotalWeight" control={<Radio />} label="Total Weight" />
                    <FormControlLabel  value="LoadPlanName" control={<Radio />} label="Load Plan Name" />
                </RadioGroup>
            </FormControl>
        </div>   
    )
}

export default ColumnsToInclude;