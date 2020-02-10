import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel,
         MenuItem,
         FormControl,
         Select
 } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const FilterByMode = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = event => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
  
    return(
        <div className='classes.root'>
            Filter By Mode
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Select</InputLabel>
                <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>All</MenuItem>
                <MenuItem value={20}>Some</MenuItem>
                <MenuItem value={30}>More</MenuItem>
                </Select>
            </FormControl>
            
        </div>   
    )
}

export default FilterByMode;