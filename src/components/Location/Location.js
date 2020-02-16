/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { 
  Menu, 
  MenuItem, 
  Fade, 
  Grid, 
  IconButton 
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Link,
  Route
  //useRouteMatch
  // withRouter
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { translate } from 'react-polyglot';

import MillOne from '../../containers/MillOne/MillOne';
import messages from './messages/en_us.json';

import clsx from 'clsx';
import axios from 'axios';

import './Location.scss'

const url = 'http://ms00015080d:7050/api/userpreferences/mill/fhenao';

const useStyles = makeStyles(theme => ({
    centerContainer: {
        display: 'flex',
        justify: 'center',
        justifyContent: 'right',
        color: '#004B87', 
        margin: '0', 
    },
    menuButton: {
        margin: '0',
        padding: '0'
    },
}));

const Location = () => {
    // let match = useRouteMatch();
    let tempMill = '';

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
// eslint-disable-next-line no-unused-vars
    const [useMills, setMills] =useState([]);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
        axios.get(url)
        .then(resData => {
            tempMill = resData.data.mills[3].millName;
            console.log(resData.data.mills[3].millName);
        })
    }, []);
 
    
    return(
        <div
          className={classes.root}
        >
             <Grid 
               item 
               xs={4} 
               className={classes.centerContainer}
             > 
                <IconButton
                  color="inherit"
                  size='small'
                  className={clsx(classes.menuButton )}
                  aria-controls="fade-menu" 
                  aria-haspopup="true" 
                  onClick={handleClick}
                > 
                    <ArrowDropDownIcon 
                      color={'primary'}
                    />
                    <h4 
                      className={classes.centerContainer}
                    >
                      {tempMill}
                    </h4> 
                </IconButton>
            </Grid>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={opens}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
             <Router>
             <MenuItem 
                onClick={handleClose}
              >
                <Route
                   exact
                   path="/load-planner/mill-one"
                   //routes={getloadPlannerRoutes()}
                   render={routeProps => (
                  <div className="load-planner">
                    
                    <Link 
                    to={`${url}/mill-one`}
                    >
                    <MillOne /> 
                  </Link>
               
                </div>
                 )}
                  />
              </ MenuItem>
          
              <MenuItem 
                onClick={handleClose}
              >
              <Link to="/mill-two">
                Mill Two
                </Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to="/mill-three">
                Mill Three
                </Link>
              </ MenuItem>
              </Router>
            </ Menu>
        </ div>
    )
}

export default Location;

