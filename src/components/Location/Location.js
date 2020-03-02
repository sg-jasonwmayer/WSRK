/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
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

} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DropButton from '../DropButton/DropButton';
import MillName from '../MillName/MillName';


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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

   
    
const [ millState, setMillState ] = useState({
  MillNames: [
    {Id: 0, MillName: "All Mills"}, 
    {Id: 1, MillName: "Fernandina Beach Mill"}, 
    {"Id": 3, "MillName": "Stevenson Mill"}, 
    {"Id": 4, "MillName": "Florence Mill"}, 
    {"Id": 5, "MillName": "Solvay Mill"}, 
    {"Id": 6, "MillName": "Tacoma Mill"}, 
    {"Id": 7, "MillName": "Seminole Mill"},  
    {"Id": 8, "MillName": "Hodge Mill"},
    {"Id": 9, "MillName": "ST. PAUL CORMED MILL"}, 
    {Id: 10, MillName: "Panama City Mill"}, 
    {"Id": 11, "MillName": "Mill For Modeling"}, 
    {"Id": 17, "MillName": "West Point Mill"}, 
    {"Id": 40, "MillName": "60FT_RAIL_STACK_EG"}, 
    {"Id": 19, "MillName": "Dublin Mill"}, 
    {"Id": 23, "MillName": "Demopolis Mill"}, 
    {"Id": 24, "MillName": "Mahrt Mill"},
    {"Id": 41, "MillName": "60FT_HIGH_CUBE_RAIL_EG"}, 
    {"Id": 36, "MillName": "Cov Warehouses"},
    {"Id": 28, "MillName": "Evadale Mill"},
    {"Id": 29, "MillName": "ZZ Lofton Whse (SAP)"}, 
    {"Id": 32, "MillName": "Covington Valley"}, 
    {"Id": 33, "MillName": "Pointe-aux-Trembles Plant"}, 
    {"Id": 42, "MillName": "ZZFernandina Beach Mil"}, 
    {"Id": 43, "MillName": "Monroe Whse"}, 
    { "Id": 44, "MillName": "XXMontebello Whse"}, 
    {"Id": 45, "MillName": "ST. PAUL BB MILL"}, 
    {"Id": 46, "MillName": "Montebello Whse"}, 
    {"Id": 50,"MillName": "WMS Internal LX Test"}, 
    {"Id": 51,"MillName": "RDC1"}, 
    {"Id": 52,"MillName": "Lofton Whse"}, 
    {"Id": 53,"MillName": "Charleston Mill DEV"}, 
    {"Id": 55,"MillName": "IWS Whse"}, 
    {"Id": 57,"MillName": "Tres Barras"}, 
    { "Id": 58, "MillName": "CrossGlobe"},
    { "Id": 60,"MillName": "Dallas Whse"},
    {"Id": 61, "MillName": "Roanoke Rapids DEV"},
    {"Id": 62,"MillName": "Fernandina Beach Mil"},
    {"Id": 63,"MillName": "DSI Whse"}, 
    { "Id": 65, "MillName": "Sunland Whse"}, 
    {"Id": 20,"MillName": "Hopewell Mill"}, 
    {"Id": 67,"MillName": "Cincinnati Whse"}, 
    {"Id": 21,"MillName": "La Tuque Mill"}, 
    {"Id": 54,"MillName": "Longview Mill"}, 
    {"Id": 56,"MillName": "NorCal Whse"}, 
    {"Id": 66, "MillName": "CLG Whse"}
  ],
showMillName: false

});


  
const handleClose = () => {
  setAnchorEl(null);
};


const setMillSelectedStateHandler = () => {
  setMillState({
    MillNames: [{"MillName": "All Mills"}],
    showMillName: true
    
  });

}


  //   useEffect(() => {
  //     axios.get(url)
  //     .then(resData => {
  //         tempMill = resData.data.mills.millName;
  //         console.log([resData.data.mills.millName]);
  //     })
          
     
      
  // }, {}
  // []);

const newName = millState.MillNames[0].MillName;
  

const showMillNameHandler = (newName) => {
  setMillState({
    MillNames: [
      
    {"Id": 66, "MillName": newName},

  ],
showMillName: true
  });
};

// const MillNames = null;
// // if ( millState.)

//  MillNames = (
//   <div>
//     {millState.MillNames.map(MillName => {
//       return (
//       <MillName 
//         // id={MillName.ID}
//         MillName={MillNames.MillName} 
//       />
//       )
//       })} 
//   </div>
// )

    return(
        <div
          className='location'
        >
             <Grid 
               item 
               xs={4} 
               className="center-container"
             > 
                <IconButton
                  size="small"
                  className="menu-Button" 
                  aria-controls="fade-menu" 
                  aria-haspopup="true" 
                  onClick={handleClick}
                > 
                    <ArrowDropDownIcon 
                      color={'primary'}
                    />
                    <h4 
                       className="center-container"
                    >
                   <MillName MillName={millState.MillNames[0].MillName} /> 
                
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
                  {/* {MillNames} */}

              <MenuItem
                onClick={handleClose}
              >
              <Link to={millState.MillNames[0].MillName}>
              <MillName 
                click={showMillNameHandler}
                Id={millState.MillNames[0].Id}
                MillName={millState.MillNames[0].MillName}
              />
                </ Link>
                </MenuItem>
                <MenuItem
                onClick={handleClose}
              >
                
                {/* <Link to="clicked"> */}
                <MillName 
                click={setMillSelectedStateHandler}
                Id={millState.MillNames[2].Id}
                MillName={millState.MillNames[2].MillName}
              />
             {/* </ Link> */}
              </ MenuItem>
             <MenuItem
                onClick={handleClose}
              >
              <Link to={millState.MillNames[3].MillName}>
              <DropButton
                name={millState.MillNames[3].MillName}
              />
                </ Link>
              </ MenuItem>
             
              </ Router>
            </ Menu>
        </ div>
    )
}

export default Location;


