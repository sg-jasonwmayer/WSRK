/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Fade, Grid, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import axios from 'axios';


import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



import './Location.scss'

const url = 'http://ms00015080d:7050/api/userpreferences/mill/fhenao';

const useStyles = makeStyles(theme => ({
    root: {
    },
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
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
// eslint-disable-next-line no-unused-vars
    const [useMills, setMills] =useState([]);
    let tempMill = '';
    

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
            //console.log(resData.data.mills[3].millName);
        })
    }, [tempMill]);
 

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
              <Link to="/mill-one">
                Mill One
              </Link>
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