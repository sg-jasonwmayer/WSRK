import React from 'react';

import { 
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl
} from '@material-ui/core';

import './ColumnsToInclude.scss';



const ColumnsToInclude = () => {

    const [value, setValue] = React.useState('female');
    const handleChange = event => {
      setValue(event.target.value);
    };

    return(
        <div className='classes.root'>
            <FormControl component="fieldset" className='form-control'>
                <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
                    <FormControlLabel  value="IncludeBoth" control={<Radio />} label="Interfaced Date" />
                    <FormControlLabel  value="OptimizedOnly" control={<Radio />} label="Interfaced User" />
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