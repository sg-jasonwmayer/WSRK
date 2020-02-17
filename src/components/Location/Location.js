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
    let resData = '';
    let resData2 = '';
    let tempMill1 = '';
    let tempMill = '';
    let tempMill2 = '';
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
// eslint-disable-next-line no-unused-vars
    const [useMills, setMills] = useState([]);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
      axios.get(url)
      .then(resData2 => {
          tempMill2 = resData2.data.mills[2].millName;
          console.log(resData2.data.mills[2].millName);
      })
      return () => {
        tempMill2 = resData2.data.mills[2].millName;

      }
  }, 
  []);



    useEffect(() => {
        axios.get(url)
        .then(resData => {
            tempMill = resData.data.mills[3].millName;
            console.log(resData.data.mills[3].millName);
            console.log(resData.data.mills[4].millName);
            console.log(resData.data.mills[5].millName);
        })
    }, 
    []);


    useEffect(() => {
      axios.get(url)
      .then(resData => {
         tempMill1 = resData.data.mills[1].millName;
          console.log(resData.data.mills[1].millName);
      })
  }, 
  []);

 
    
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
               
                    </ h4> 
                </ IconButton>
            </ Grid>
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
              <Link to="/hopewell-mill">
              Hopewell Mill
                </ Link>
              </ MenuItem>
             <MenuItem 
                onClick={handleClose}
              >
              <Link to="/hodge-mill">
              Hodge Mill
                </ Link>
              </ MenuItem>
              <MenuItem 
                onClick={handleClose}
              >
              <Link to="/dublin-mill">
              Dublin Mill
                </ Link>
              </ MenuItem>
              <MenuItem 
                onClick={handleClose}
              >
              <Link to="/fernandina-beach-mill">
              Fernandina Beach Mill
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to="/Florence-Mill">
                Florence Mill
                </ Link>
              </ MenuItem>
              </ Router>
            </ Menu>
        </ div>
    )
}

export default Location;

