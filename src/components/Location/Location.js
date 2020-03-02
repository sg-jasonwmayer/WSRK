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

// import { translate } from 'react-polyglot';
// import messages from './messages/en_us.json';

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

   
    
const [ millState, setMillState ] = useState({
  MillNames: [{
    "Id": 1,
    "MillName": "All Mills"
}, {
    "Id": 2,
    "MillName": "Fernandina Beach Mill"
}, {
    "Id": 7,
    "MillName": "Stevenson Mill"
}, {
    "Id": 8,
    "MillName": "Florence Mill"
}, {
    "Id": 14,
    "MillName": "Solvay Mill"
}, {
    "Id": 15,
    "MillName": "Tacoma Mill"
}, {
    "Id": 10,
    "MillName": "Seminole Mill"
}, {
    "Id": 11,
    "MillName": "Hodge Mill"
}, {
    "Id": 39,
    "MillName": "ST. PAUL CORMED MILL"
}, {
    "Id": 13,
    "MillName": "Panama City Mill"
}, {
    "Id": 38,
    "MillName": "Mill For Modeling"
}, {
    "Id": 17,
    "MillName": "West Point Mill"
}, {
    "Id": 40,
    "MillName": "60FT_RAIL_STACK_EG"
}, {
    "Id": 19,
    "MillName": "Dublin Mill"
}, {
    "Id": 23,
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
    "Id": 57,
    "MillName": "Tres Barras"
}, {
    "Id": 58,
    "MillName": "CrossGlobe"
}, {
    "Id": 60,
    "MillName": "Dallas Whse"
}, {
    "Id": 61,
    "MillName": "Roanoke Rapids DEV"
}, {
    "Id": 62,
    "MillName": "Fernandina Beach Mil"
}, {
    "Id": 63,
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


  
const handleClose = () => {
  setAnchorEl(null);
};


const setMillSelectedStateHandler = () => {
  setMillState({
    MillNames: [{"MillName": "All Mills"}]
  });

}


    useEffect(() => {
      axios.get(url)
      .then(resData => {
          tempMill = resData.data.mills.millName;
          console.log([resData.data.mills.millName]);
      })
          
     
      
  }, 
  []);




// const MillNames = (
//   <div>
//     {millState.MillNames.map(MillName => {
//       return <MillName name={MillName.MillName} />
//       })} 
//   </div>
// )

    return(
        <div
          className='location-list'
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
                     <MillName
                       name={millState.MillNames[0].MillName}
                     />
                
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

             <MenuItem  >
          
              <Link to={millState.MillNames[0].MillName}>
              <MillName 
                click={setMillSelectedStateHandler}
                name={millState.MillNames[0].MillName}
              />
                <DropButton
                onClick={setMillSelectedStateHandler}
                name={millState.MillNames[0].MillName}
              />
    
                </ Link>
              </ MenuItem>
             <MenuItem
                onClick={handleClose}
              >
              <Link to={millState.MillNames[1].MillName}>
              <DropButton
                name={millState.MillNames[1].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem 
                onClick={handleClose}
              >
              <Link to={millState.MillNames[2].MillName}>
              <DropButton
                name={millState.MillNames[2].MillName}
              />
              </ Link>
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
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[4].MillName}>
                <DropButton
                name={millState.MillNames[4].MillName}
              />
              </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[5].MillName}>
                <DropButton
                name={millState.MillNames[5].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[6].MillName}>
                <DropButton
                 name={millState.MillNames[6].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[7].MillName}>
                <DropButton
                 name={millState.MillNames[7].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[8].MillName}>
                <DropButton
                 name={millState.MillNames[8].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[9].MillName}>
                <DropButton
                 name={millState.MillNames[9].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[10].MillName}>
                <DropButton
                 name={millState.MillNames[10].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[11].MillName}>
                <DropButton
                 name={millState.MillNames[11].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[12].MillName}>
                <DropButton
                 name={millState.MillNames[12].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[13].MillName}>
                <DropButton
                 name={millState.MillNames[13].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[14].MillName}>
                <DropButton
                 name={millState.MillNames[14].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[15].MillName}>
                <DropButton
                 name={millState.MillNames[15].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[16].MillName}>
                <DropButton
                 name={millState.MillNames[16].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[17].MillName}>
                <DropButton
                 name={millState.MillNames[17].MillName}
              />
                </ Link>
              </ MenuItem>

              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[18].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[19].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[20].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[21].MillName}
              />
                </ Link>
              </ MenuItem>  <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[22].MillName}
              />
                </ Link>
              </ MenuItem>  <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[23].MillName}
              />
                </ Link>
              </ MenuItem> 
               <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[24].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[25].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[26].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[27].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[28].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[29].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[30].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[31].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[32].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[35].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[34].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[36].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[37].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[38].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[39].MillName}>
                <DropButton
                 name={millState.MillNames[24].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[40].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[24].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[41].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[42].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[43].MillName}
              />
                </ Link>
              </ MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to={millState.MillNames[18].MillName}>
                <DropButton
                 name={millState.MillNames[44].MillName}
              />
                </ Link>
              </ MenuItem>
              </ Router>
            </ Menu>
        </ div>
    )
}

export default Location;


