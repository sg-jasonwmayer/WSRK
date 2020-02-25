import React from 'react';
import './CollapsibleItems.scss';

import FilterByMode from '../FilterByMode';
import ColumnsToInclude from '../ColumnsToInclude';
import ValueInputBox from '../ValueInputBox/ValueInputBox.js';

import Collapsible from 'react-collapsible';

const CollapsibleItems = () => {

  return (
    <div className="value-input">
      <ValueInputBox />
      <FilterByMode />
      <Collapsible trigger="Columns to Include in Selection Data Grid" transitionTime="150">
        <ColumnsToInclude /> 
      </Collapsible> 
    </div>
  );
}

export default CollapsibleItems;