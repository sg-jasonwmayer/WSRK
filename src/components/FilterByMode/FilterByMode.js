import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const FilterByMode = () => {
  const classes = useStyles();
  const [mode, setMode] = React.useState('');
  const [openDropDown, setOpenDropDown] = React.useState(false);

  const handleChange = event => {
    setMode(event.target.value);
  };

  const handleClose = () => {
    setOpenDropDown(false);
  };

  const handleOpen = () => {
    setOpenDropDown(true);
  };

  return(
    <div className='classes.root'>
      <FormControl className={classes.formControl}>
        <InputLabel>Filter By Mode</InputLabel>
        <Select
          open={openDropDown}
          onClose={handleClose}
          onOpen={handleOpen}
          value={mode}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Truck">Truck</MenuItem>
          <MenuItem value="Rail">Rail</MenuItem>
          <MenuItem value="Container">Container</MenuItem>
          <MenuItem value="Container On Chasis">Container On Chasis</MenuItem>
        </Select>
      </FormControl>
    </div>   
  )
}

export default FilterByMode;