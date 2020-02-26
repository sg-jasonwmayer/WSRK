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
  millNames: [{"MillName": "All Mills"}, 
  {"MillName": "Fernandina Beach Mill"},
  {"MillName": "Stevenson Mill"}, 
  {"MillName": "Florence Mill"}, 
  {
      "MillName": "Solvay Mill"
  }, {
  
      "MillName": "Tacoma Mill"
  }, {
  
      "MillName": "Seminole Mill"
  }, {
  
      "MillName": "Hodge Mill"
  }, {
  
      "MillName": "ST. PAUL CORMED MILL"
  }, {
   
      "MillName": "Panama City Mill"
  }, {
  
      "MillName": "Mill For Modeling"
  }, {
  
      "MillName": "West Point Mill"
  }, {
  
      "MillName": "60FT_RAIL_STACK_EG"
  }, {
  
      "MillName": "Dublin Mill"
  }, {
  
      "MillName": "Demopolis Mill"
  }, {
      "Id": 24,
      "MillName": "Mahrt Mill"
  }, {
      "Id": 41,
      "MillName": "60FT_HIGH_CUBE_RAIL_EG"
  }, {
      "Id": 36,
      "MillName": "Cov Warehouses"
  }, {
      "Id": 28,
      "MillName": "Evadale Mill"
  }, {
      "Id": 29,
      "MillName": "ZZ Lofton Whse (SAP)"
  }, {
      "Id": 32,
      "MillName": "Covington Valley"
  }, {
      "Id": 33,
      "MillName": "Pointe-aux-Trembles Plant"
  }, {
      "Id": 42,
      "MillName": "ZZFernandina Beach Mil"
  }, {
      "Id": 43,
      "MillName": "Monroe Whse"
  }, {
      "Id": 44,
      "MillName": "XXMontebello Whse"
  }, {
      "Id": 45,
      "MillName": "ST. PAUL BB MILL"
  }, {
      "Id": 46,
      "MillName": "Montebello Whse"
  }, {
      "Id": 50,
      "MillName": "WMS Internal LX Test"
  }, {
      "Id": 51,
      "MillName": "RDC1"
  }, {
      "Id": 52,
      "MillName": "Lofton Whse"
  }, {
      "Id": 53,
      "MillName": "Charleston Mill DEV"
  }, {
      "Id": 55,
      "MillName": "IWS Whse"
  }, {
  
      "MillName": "Tres Barras"
  }, {
      "Id": 58,
      "MillName": "CrossGlobe"
  }, {
  
      "MillName": "Dallas Whse"
  }, {
  
      "MillName": "Roanoke Rapids DEV"
  }, {
  
      "MillName": "Fernandina Beach Mil"
  }, {
  
      "MillName": "DSI Whse"
  }, {
      "Id": 65,
      "MillName": "Sunland Whse"
  }, {
      "Id": 20,
      "MillName": "Hopewell Mill"
  }, {
      "Id": 67,
      "MillName": "Cincinnati Whse"
  }, {
      "Id": 21,
      "MillName": "La Tuque Mill"
  }, {
      "Id": 54,
      "MillName": "Longview Mill"
  }, {
      "Id": 56,
      "MillName": "NorCal Whse"
  }, {
      "Id": 66,
      "MillName": "CLG Whse"
  }]
});

const millName = '';
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  

    useEffect(() => {
      axios.get(url)
      .then(resData => {
    
          tempMill = resData.data.mills[2].millName;
          console.log(resData.data.mills[2].millName);
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
                      Panama City Mill
               
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
              <Link to={millState.millNames[0].MillName}>
                <DropButton
                name={millState.millNames[0].MillName}
                 />
    
                </ Link>
              </ MenuItem>
             <MenuItem 
                onClick={handleClose}
              >
              <Link to={millState.millNames[1].MillName}>
              <DropButton
                name={millState.millNames[1].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem 
                onClick={handleClose}
              >
              <Link to={millState.millNames[2].MillName}>
              <DropButton
                name={millState.millNames[2].MillName}
              />
              </ Link>
              </ MenuItem>
              <MenuItem 
                onClick={handleClose}
              >
              <Link to={millState.millNames[3].MillName}>
              <DropButton
                name={millState.millNames[3].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[4].MillName}>
                <DropButton
                name={millState.millNames[4].MillName}
              />
              </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[5].MillName}>
                <DropButton
                name={millState.millNames[5].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[6].MillName}>
                <DropButton
                 name={millState.millNames[6].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[7].MillName}>
                <DropButton
                 name={millState.millNames[7].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[8].MillName}>
                <DropButton
                 name={millState.millNames[8].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[9].MillName}>
                <DropButton
                 name={millState.millNames[9].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[10].MillName}>
                <DropButton
                 name={millState.millNames[10].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[11].MillName}>
                <DropButton
                 name={millState.millNames[11].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[12].MillName}>
                <DropButton
                 name={millState.millNames[12].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[13].MillName}>
                <DropButton
                 name={millState.millNames[13].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[14].MillName}>
                <DropButton
                 name={millState.millNames[14].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[15].MillName}>
                <DropButton
                 name={millState.millNames[15].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[16].MillName}>
                <DropButton
                 name={millState.millNames[16].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[17].MillName}>
                <DropButton
                 name={millState.millNames[17].MillName}
              />
                </ Link>
              </ MenuItem>

              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[18].MillName}>
                <DropButton
                 name={millState.millNames[18].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[18].MillName}>
                <DropButton
                 name={millState.millNames[19].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[18].MillName}>
                <DropButton
                 name={millState.millNames[20].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[18].MillName}>
                <DropButton
                 name={millState.millNames[21].MillName}
              />
                </ Link>
              </ MenuItem>  <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[18].MillName}>
                <DropButton
                 name={millState.millNames[22].MillName}
              />
                </ Link>
              </ MenuItem>  <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[18].MillName}>
                <DropButton
                 name={millState.millNames[23].MillName}
              />
                </ Link>
              </ MenuItem>  <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.millNames[18].MillName}>
                <DropButton
                 name={millState.millNames[24].MillName}
              />
                </ Link>
              </ MenuItem>



              </ Router>
            </ Menu>
        </ div>
    )
}

export default Location;


