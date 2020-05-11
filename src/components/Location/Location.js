/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { 
  Menu, 
  Fade, 
  Grid, 
  IconButton 
} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MillName from '../MillName/MillName';

import axios from 'axios';

import { fetchMillsList } from '../../api.js'

import './Location.scss';

const Location = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget); 
    }  

  const handleClose = () => {
    setAnchorEl(null);
  };

  let [millListState, setMillListState] = useState([{fetchMillsList}]);
    // useEffect() hook fires any time that the component is rendered.
    // An empty array is passed as the second argument so that the effect only fires once.
    useEffect(() => {
      axios
        .get('http://ms00015080d:7050/api/userpreferences/mill/fhenao')
        .then(response => setMillListState(response.data));
    }, []);

  const millListDropDown = () => {
    return (
      <div className="location-list">
        <code>{JSON.stringify(millListState)}</code>
      </div>
    );
  }

  const [ millState, setMillState ] = useState({
    millNames: [  {"millId": 0, "MillName": "Charleston Mill DEV"}, {"millId": 1, "MillName": "Dublin Mill"}, {"millId": 2, "MillName": "Fernandina Beach Mill"},{"millId": 3, "MillName": "Florence Mill"},{"millId": 4, "MillName": "Hodge Mill"},{"millId": 5, "MillName": "Hopewell Mill"},{"millId": 6, "MillName": "La Tuque Mill" }, {"millId": 7, "MillName": "Panama City Mill"},{"millId": 8, "MillName": "Roanoke Rapids DEV"}, {"millId": 9, "MillName": "Seminole Mill"},{"millId": 10, "MillName": "Solvay Mill"},{"millId": 11, "MillName": "Stevenson Mill" },{"millId": 12, "MillName": "Tacoma Mill" },{"millId": 13,"MillName": "West Point Mill"}
  ],
    showMillName: true

  });

  let [millTitleState, setMillTitleState] = useState({
    millNames: [{"Id":1,"MillName":"All Mills"}]
  });


  const showMillNameHandler = (event) => {
    setMillTitleState({
      millNames: [{"Id":1,"MillName":"All Mills"}]
    });
    setAnchorEl(null);
  }

  return (
    <div
      className='location'
      >
      <Grid 
        item 
        xs={4} 
        className="center-container-grid"
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
        <h4 className="center-container">
          <MillName
            className="mill-name-header"
            millName="All Mills"
          /> 
        </ h4> 
        </ IconButton>
      </ Grid>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={opens}
        onClose={handleClick} 
        TransitionComponent={Fade}
      >

        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[0].MillName}
        /> 
          <MillName 
          click={showMillNameHandler}  
          millName={millState.millNames[1].MillName}
        />
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[2].MillName}
        />
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[3].MillName}
        />
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[4].MillName}
        />
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[5].MillName}
        />
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[6].MillName}
        />
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[7].MillName}
        />
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[8].MillName}
        />
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[9].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[10].MillName}
        />  
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[11].MillName}
        />
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[12].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[13].MillName}
        /> 
       
      </ Menu>
    </ div>
  )
}

export default Location;

