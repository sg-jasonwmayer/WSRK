import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterSearchBy from './FilterSearchBy';
import CriteriaDropDown from './CriteriaDropDown';
import ValueInputBox from './ValueInputBox';
import FilterByMode from './FilterByMode';

const useStyles = makeStyles(theme => ({
    root: {
    },
}));

const LoadPlanner = () => {
    return(
        <div className='classes.root'>
            <FilterSearchBy />
            <CriteriaDropDown />
            <ValueInputBox />
            <FilterByMode />
        </div>   
    )
}

export default LoadPlanner;