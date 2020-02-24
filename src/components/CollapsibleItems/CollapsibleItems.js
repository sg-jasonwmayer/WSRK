import React from 'react';
import './CollapsibleItems.scss';

import OptimizedFilter from '../OptimizedFilter/OptimizedFilter.js';
import FilterByMode from '../FilterByMode';
import ColumnsToInclude from '../ColumnsToInclude';
import FilterSearchBy from '../FilterSearchBy/FilterSearchBy.js';
import CriteriaDropDown from '../CriteriaDropDown/CriteriaDropDown.js';
import ValueInputBox from '../ValueInputBox/ValueInputBox.js';

import Collapsible from 'react-collapsible';

const CollapsibleItems = () => {

  return (
    <div className="value-input">
      <ValueInputBox />
      <Collapsible  trigger="Criteria" transitionTime="150" >
        <CriteriaDropDown /> 
      </Collapsible>
      <Collapsible trigger="Filter Search By" transitionTime="150">
        <FilterSearchBy /> 
      </Collapsible>
      <Collapsible trigger="Filter by Mode" transitionTime="150">
        <FilterByMode />
      </Collapsible>
      <Collapsible trigger="Optimized Filters" transitionTime="150">
        <OptimizedFilter />
      </Collapsible>
      <Collapsible trigger="Columns to Include in Selection Data Grid" transitionTime="150">
        <ColumnsToInclude /> 
      </Collapsible> 
    </div>
  );
}

export default CollapsibleItems;