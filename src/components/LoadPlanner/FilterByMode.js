import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
    },
}));

const FilterByMode = () => {
    const classes = useStyles();
    
    return(
        <div className='classes.root'>
            Filter By Mode
        </div>   
    )
}

export default FilterByMode;