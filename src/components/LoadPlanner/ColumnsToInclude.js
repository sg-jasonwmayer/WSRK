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
                    <FormControlLabel  control={<Radio />} label="Optimized User" />
                    <FormControlLabel  control={<Radio />} label="IMill/Cust Preference" />
                    <FormControlLabel  control={<Radio />} label="Last Vehicle Wt % Utilized" />
                    <FormControlLabel  control={<Radio />} label="Last Vehicle Vol % Utilized" />
                    <FormControlLabel  control={<Radio />} label="Total Rolls" />
                    <FormControlLabel  control={<Radio />} label="Total Weight" />
                    <FormControlLabel  control={<Radio />} label="Load Plan Name" />
                </RadioGroup>
            </FormControl>
        </div>   
    )
}

export default ColumnsToInclude;