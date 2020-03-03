/* eslint-disable react/prop-types */
import React from 'react';
import './CollapsibleItems.scss';

import { Divider } from '@material-ui/core';
                     

import FilterByMode from '../FilterByMode';
import ColumnsToInclude from '../ColumnsToInclude';
import FilterSearchBy from '../FilterSearchBy/FilterSearchBy.js';
import CriteriaDropDown from '../CriteriaDropDown/CriteriaDropDown.js';
import ValueInputBox from '../ValueInputBox/ValueInputBox.js';

import Collapsible from 'react-collapsible';

const CollapsibleItems = () => {


const translate = {
  filterbyMode: 'Filter by Mode',
  columnsToInclude: 'Columns to Include in Selection Data Grid',
  optimizedFilters: 'Optimized Filters',
  };
  
  return (
    
    <div className="value-input">
      <ValueInputBox />
      <Collapsible  trigger="Criteria">
        <CriteriaDropDown /> 
      </Collapsible>
      <Collapsible trigger={translate.filterSearchBy}>
        <FilterSearchBy /> 
      </ Collapsible>
      <Collapsible trigger={translate.filterbyMode}>
        <FilterByMode />
      </Collapsible>
      <Collapsible trigger={translate.columnsToInclude} />
      <Divider />
      <Collapsible trigger="Columns to Include in Selection Data Grid">
        <ColumnsToInclude /> 
      </Collapsible> 
      <Divider />
      <Collapsible trigger="Filter by Mode">
        <FilterByMode /> 
      </ Collapsible>
      <Divider />
      <Collapsible trigger="Columns to Include in Selection Data Grid"> 
        <ColumnsToInclude /> 
      </Collapsible>
    </div>
  );
}

export default CollapsibleItems;

