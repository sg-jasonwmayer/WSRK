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

import DropButton from '../DropButton/DropButton';

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

const Location = props => {
    // let match = useRouteMatch();
    let resData = '';
    let tempMill = '';
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

  
const [ millState ] = useState({
  millNames: [
    {name: 'Hopewell Mill'},
    {name: 'Hodge Mill'},
    {name: 'Dublin Mill'},
    {name: 'Ferdnadina Beach Mill'},
    {name: 'Florence Mill'},
    {name: 'La Tuque Mill'},
    {name: 'Panama City Mill'},
    {name: 'Solvay Mill'},
    {name: 'Seminole Mill'},
    {name: 'Roanoke Rapids DEV'},
    {name: 'Stevenson Mill'},
    {name: 'West Point Mill'},
    {name: 'Tacoma Mill'}
    
  ]

});


  
    const handleClose = () => {
      setAnchorEl(null);
    };

  

    useEffect(() => {
      axios.get(url)
      .then(resData => {
          tempMill = resData.data.mills[2].millName;
          console.log(resData.data.mills[2].millName);
      })
      
      return () => {
        tempMill = resData.data.mills[2].millName;

      }
  }, 
  []);



    useEffect(() => {
        axios.get(url)
        .then(resData => {
            tempMill = resData.data.mills[13].millName;
             console.log(resData.data.mills[13].millName);
     
    
        })
    }, 
    []);


    useEffect(() => {
      axios.get(url)
      .then(resData => {
         tempMill = resData.data.mills[13].millName;
     

     
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
                <DropButton
                name={millState.millNames[0].name}
                 />
    
                </ Link>
              </ MenuItem>
             <MenuItem 
                onClick={handleClose}
              >
              <Link to="/hodge-mill">
              <DropButton
                name={millState.millNames[1].name}
              />
                </ Link>
              </ MenuItem>
              <MenuItem 
                onClick={handleClose}
              >
              <Link to="/dublin-mill">
              <DropButton
                name={millState.millNames[2].name}
              />
              </ Link>
              </ MenuItem>
              <MenuItem 
                onClick={handleClose}
              >
              <Link to="/fernandina-beach-mill">
              <DropButton
                name={millState.millNames[3].name}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[4].name}>
                <DropButton
                name={millState.millNames[4].name}
              />
              </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[5].name}>
                <DropButton
                name={millState.millNames[5].name}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[6].name}>
                <DropButton
                 name={millState.millNames[6].name}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[7].name}>
                <DropButton
                 name={millState.millNames[7].name}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[8].name}>
                <DropButton
                 name={millState.millNames[8].name}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[9].name}>
                <DropButton
                 name={millState.millNames[9].name}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[10].name}>
                <DropButton
                 name={millState.millNames[10].name}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[11].name}>
                <DropButton
                 name={millState.millNames[11].name}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[12].name}>
                <DropButton
                 name={millState.millNames[12].name}
              />
                </ Link>
              </ MenuItem>
              
              </ Router>
            </ Menu>
        </ div>
    )
}

export default Location;


