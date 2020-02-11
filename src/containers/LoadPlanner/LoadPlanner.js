import React from 'react';
import FilterSearchBy from '../../components/FilterSearchBy';
import CriteriaDropDown from '../../components/CriteriaDropDown';
import FilterByMode from '../../components/FilterByMode';
import OptimizedFilter from '../../components/OptimizedFilter';
import ColumnsToInclude from '../../components/ColumnsToInclude';

const LoadPlanner = () => {

    return(
        <div className='classes.root'>
            <FilterSearchBy />
            <CriteriaDropDown />
            <FilterByMode />
            <OptimizedFilter />
            <ColumnsToInclude />
        </div>   
    )
}

export default LoadPlanner;