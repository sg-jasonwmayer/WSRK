import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

const OptimizedFilter = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState('female');
  
    const handleChange = event => {
      setValue(event.target.value);
    };

    return(
        <div className='classes.root'>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Optimized Filter</FormLabel>
                <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
                    <FormControlLabel value="IncludeBoth" control={<Radio />} label="Include Both" />
                    <FormControlLabel value="OptimizedOnly" control={<Radio />} label="Optimized Only" />
                    <FormControlLabel value="UnOptimizedOnly" control={<Radio />} label="UnOptimized Only" />
                </RadioGroup>
            </FormControl>
        </div>   
    )
}

export default OptimizedFilter;