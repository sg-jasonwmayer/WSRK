/* eslint-disable react/prop-types */
import React from 'react';

import './DropButton.scss'
import 'typeface-roboto';

const DropButton = (props) => {
  return (
  <p className="drop-button">{props.name}</p>
  );
}

export default DropButton;
