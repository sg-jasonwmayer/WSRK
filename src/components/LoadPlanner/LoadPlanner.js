import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterSearchBy from './FilterSearchBy';
import CriteriaDropDown from './CriteriaDropDown';
import ValueInputBox from './ValueInputBox';
import FilterByMode from './FilterByMode';
import OptimizedFilter from './OptimizedFilter';

const useStyles = makeStyles(theme => ({
    root: {
    },
}));

const LoadPlanner = () => {
    const classes = useStyles();

    return(
        <div className='classes.root'>
            <FilterSearchBy />
            <CriteriaDropDown />
            <ValueInputBox />
            <FilterByMode />
            <OptimizedFilter />
        </div>   
    )
}

export default LoadPlanner;