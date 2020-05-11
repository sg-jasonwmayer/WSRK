/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from '@material-ui/core';


import Location from '../Location';

import './CenterContainer.scss';

const CenterContainer = (props) => {
  return(
    <Grid 
      id={props.Id}
      item xs={props.Item} 
      className="center-container"
    >
      <Location/>
    </Grid>
)};

export default CenterContainer;