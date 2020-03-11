import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  NativeSelect,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
  },
}));

const FilterByMode = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    mode: 'hai',
  });

  const handleChange = mode => event => {
    setState({
      ...state,
      [mode]: event.target.value,
    });
  };

  return(
    <div className='classes.root'>
      <FormControl className={classes.formControl}>
        <InputLabel>Filter By Mode</InputLabel>
        <NativeSelect
          value={state.mode}
          onChange={handleChange('mode')}
        >
          <option value="" />
          <option value="All">All</option>
          <option value="Truck">Truck</option>
          <option value="Rail">Rail</option>
          <option value="Container">Container</option>
          <option value="Container On Chasis">Container On Chasis</option>
        </NativeSelect>
      </FormControl>
    </div>   
  )
}

export default FilterByMode;