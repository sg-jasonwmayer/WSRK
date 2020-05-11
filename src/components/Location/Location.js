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
<<<<<<< HEAD

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
    millNames: [
    {"Id":0,"MillName":"All Mills"},
    {"Id":1,"MillName":"Cincinnati Whse"},
    {"Id":2,"MillName":"Charleston Mill DEV"},
    {"Id":3,"MillName":"CLG Whse"},
    {"Id":4,"MillName":"Cov Warehouses"},
    {"Id":5,"MillName":"Covington Valley"},
    {"Id":6,"MillName":"CrossGlobe"},
    {"Id":7,"MillName":"Dallas Whse"}, 
    {"Id":8,"MillName":"Demopolis Mill"},
    {"Id":9,"MillName":"DSI Whse"},
    {"Id":10,"MillName":"Dublin Mill"},
    {"Id":11,"MillName":"Evadale Mill"},
    {"Id":12,"MillName":"Fernandina Beach Mill"}, 
    {"Id":13,"MillName":"Florence Mill"},
    {"Id":14,"MillName":"Hodge Mill"},
    {"Id":15,"MillName":"Hopewell Mill"},
    {"Id":16,"MillName":"IWS Whse"},
    {"Id":17,"MillName":"La Tuque Mill"},
    {"Id":18,"MillName":"Lofton Whse"},
    {"Id":19,"MillName":"Longview Mill"},
    {"Id":20,"MillName":"Mahrt Mill"},
    {"Id":21,"MillName":"Mill For Modeling"},
    {"Id":22,"MillName":"Monroe Whse"},
    {"Id":23,"MillName":"Montebello Whse"},
    {"Id":24,"MillName":"NorCal Whse"},
    {"Id":25,"MillName":"Panama City Mill"},  
    {"Id":26,"MillName":"Pointe-aux-Trembles Plant"},
    {"Id":27,"MillName":"RDC1"},
    {"Id":28,"MillName":"Roanoke Rapids DEV"},
    {"Id":29,"MillName":"Seminole Mill"}, 
    {"Id":30,"MillName":"Solvay Mill"},
    {"Id":31,"MillName":"ST. PAUL CORMED MILL"},
    {"Id":32,"MillName":"Stevenson Mill"},
    {"Id":33,"MillName":"Sunland Whse"},
    {"Id":34,"MillName":"Tacoma Mill"},
    {"Id":35,"MillName":"West Point Mill"},
    {"Id":36,"MillName":"ST. PAUL BB MILL"},
    {"Id":37,"MillName":"WMS Internal LX Test"},
    {"Id":38,"MillName":"Tres Barras"},
    {"Id":39,"MillName":"XXMontebello Whse"},
    {"Id":40,"MillName":"ZZ Lofton Whse (SAP)"},
    {"Id":41,"MillName":"ZZFernandina Beach Mil"},
    {"Id":42,"MillName":"60FT_RAIL_STACK_EG"}
  ],
    showMillName: true

  });

  let [millTitleState, setMillTitleState] = useState({
    millNames: [{"Id":1,"MillName":"All Mills"}]
  });
=======

import './Location.scss';

const Location = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget); 
    }  
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722

  const handleClose = () => {
    setAnchorEl(null);
  };

<<<<<<< HEAD
=======
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


>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
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
<<<<<<< HEAD
        <h4 
          className="center-container"
                >
=======
        <h4 className="center-container">
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
          <MillName
            className="mill-name-header"
            millName="All Mills"
          /> 
        </ h4> 
        </ IconButton>
      </ Grid>

      <Menu
<<<<<<< HEAD
        id="fade-menu"
=======
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
        anchorEl={anchorEl}
        keepMounted
        open={opens}
        onClose={handleClick} 
        TransitionComponent={Fade}
      >

<<<<<<< HEAD
          {millListDropDown}
=======
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
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
<<<<<<< HEAD
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[14].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[15].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[16].MillName}
        /> 
          <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[17].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[18].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[19].MillName}
        />  
            <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[20].MillName}
        />  
            <MillName 
          click={showMillNameHandler}
          millName={millState.millNames[21].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[22].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[23].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[24].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[25].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[26].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[27].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[28].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[29].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[30].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[31].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[32].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[33].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[34].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[35].MillName}
        /> 
            <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[36].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[37].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[38].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[39].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[40].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[41].MillName}
        /> 
        <MillName 
          click={showMillNameHandler}            
          millName={millState.millNames[42].MillName}
        /> 
=======
       
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
      </ Menu>
    </ div>
  )
}

export default Location;
<<<<<<< HEAD
=======

>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
