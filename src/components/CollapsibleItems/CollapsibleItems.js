/* eslint-disable react/prop-types */
import React from 'react';
import './CollapsibleItems.scss';

import { Divider } from '@material-ui/core';

import OptimizedFilter from '../OptimizedFilter/OptimizedFilter.js';
import FilterByMode from '../FilterByMode';
import ColumnsToInclude from '../ColumnsToInclude';
import FilterSearchBy from '../FilterSearchBy/FilterSearchBy.js';
import CriteriaDropDown from '../CriteriaDropDown/CriteriaDropDown.js';
import ValueInputBox from '../ValueInputBox/ValueInputBox.js';

import Collapsible from 'react-collapsible';

const CollapsibleItems = () => {


//   // eslint-disable-next-line no-unused-vars
//   const handleClickCollapsible = (e) => {
//     e.preventDefault();

// }
  
  return (
    
    <div className="value-input">
     <ValueInputBox />
     <Collapsible  trigger="Criteria">
       <CriteriaDropDown /> 
     </Collapsible><Collapsible trigger="Filter Search By">
         <FilterSearchBy /> 
         </ Collapsible><Collapsible trigger="Filter by Mode">
             <FilterByMode />
              </Collapsible>
              <Collapsible trigger="Optimized Filters">
              </Collapsible>
              <Divider />
              <Collapsible trigger="Columns to Include in Selection Data Grid">
              <ColumnsToInclude /> 
              </Collapsible> 
              <Divider />
              <Collapsible trigger="Filter by Mode">
                <FilterByMode /> 
                  </ Collapsible>
                  <Divider />
                  <Collapsible trigger="Optimized Filters">
                       <OptimizedFilter />
                        </ Collapsible> 
                        <Collapsible trigger="Columns to Include in Selection Data Grid"> 
                        <ColumnsToInclude /> 
                        </Collapsible>
                        </div>
  );
}

export default CollapsibleItems;

