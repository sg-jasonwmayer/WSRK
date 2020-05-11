/* eslint-disable no-unused-vars */
import React from 'react';

import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Grid,
    IconButton 
} from '@material-ui/core';



import DrawerItems from '../../components/DrawerItems/DrawerItems';


import './DrawerItemsContainer.scss';



const DrawerItemsContainer = () => {
    return (
      <Grid container >
        <Grid item xs={4}>
          <DrawerItems />
        </Grid>
      </Grid>
        
    )
}

export default DrawerItemsContainer; 
