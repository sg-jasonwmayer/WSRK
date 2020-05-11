/* eslint-disable no-unused-vars */
import React from 'react';

import {
    AppBar,
    Toolbar,
    Grid
} from '@material-ui/core';

import CenterContainer from '../../components/CenterContainer';
import RightContainer from '../../components/RightContainer';
import DrawerItemsContainer from '../DrawerItemsContainer';

import './AppBarContainer.scss';


const Header = () => {
    return (
      <AppBar className="app-bar-container"  color="inherit">
        <Toolbar>
          <Grid container>
            <Grid item xs={4}>
              <DrawerItemsContainer />
            </Grid>
            <Grid item xs={4}>
              <CenterContainer className="center-container"/>
            </Grid>
            <Grid item xs={4}>
              <RightContainer className="right-container"/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
}

export default Header; 
