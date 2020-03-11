/* eslint-disable react/prop-types */
import React from 'react';
import './CollapsibleItems.scss';
import Collapsible from 'react-collapsible';

import FilterByMode from '../FilterByMode';
import ColumnsToInclude from '../ColumnsToInclude';

import './CollapsibleItems.scss';

import ValueInputBox from '../ValueInputBox/ValueInputBox.js';


const CollapsibleItems = () => {

  return (
    <div className="value-input">
      <ValueInputBox />
      <FilterByMode />
      <Collapsible trigger="Columns to Include in Selection Data Grid" transitionTime={150}>
        <ColumnsToInclude /> 
      </Collapsible> 
    </div>
  );
}

export default CollapsibleItems;
