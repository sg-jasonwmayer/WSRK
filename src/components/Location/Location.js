/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { 
  Menu, 
  Fade, 
  Grid, 
  IconButton 
} from '@material-ui/core';

// import {
//   BrowserRouter as Router,
//   Link,
//   Route
// } from "react-router-dom";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MillName from '../MillName/MillName';

import axios from 'axios';

import { fetchMillsList } from '../../api.js'

import './Location.scss'


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
  millNames: [{"Id":1,"MillName":"All Mills"},{"Id":2,"MillName":"Fernandina Beach Mill"},{"Id":7,"MillName":"Stevenson Mill"},{"Id":8,"MillName":"Florence Mill"},{"Id":14,"MillName":"Solvay Mill"},{"Id":15,"MillName":"Tacoma Mill"},{"Id":10,"MillName":"Seminole Mill"},{"Id":11,"MillName":"Hodge Mill"},{"Id":39,"MillName":"ST. PAUL CORMED MILL"},{"Id":13,"MillName":"Panama City Mill"},{"Id":38,"MillName":"Mill For Modeling"},{"Id":17,"MillName":"West Point Mill"},{"Id":40,"MillName":"60FT_RAIL_STACK_EG"},{"Id":19,"MillName":"Dublin Mill"},{"Id":23,"MillName":"Demopolis Mill"},{"Id":24,"MillName":"Mahrt Mill"},{"Id":41,"MillName":"60FT_HIGH_CUBE_RAIL_EG"},{"Id":36,"MillName":"Cov Warehouses"},{"Id":28,"MillName":"Evadale Mill"},{"Id":29,"MillName":"ZZ Lofton Whse (SAP)"},{"Id":32,"MillName":"Covington Valley"},{"Id":33,"MillName":"Pointe-aux-Trembles Plant"},{"Id":42,"MillName":"ZZFernandina Beach Mil"},{"Id":43,"MillName":"Monroe Whse"},{"Id":44,"MillName":"XXMontebello Whse"},{"Id":45,"MillName":"ST. PAUL BB MILL"},{"Id":46,"MillName":"Montebello Whse"},{"Id":50,"MillName":"WMS Internal LX Test"},{"Id":51,"MillName":"RDC1"},{"Id":52,"MillName":"Lofton Whse"},{"Id":53,"MillName":"Charleston Mill DEV"},{"Id":55,"MillName":"IWS Whse"},{"Id":57,"MillName":"Tres Barras"},{"Id":58,"MillName":"CrossGlobe"},{"Id":60,"MillName":"Dallas Whse"},{"Id":61,"MillName":"Roanoke Rapids DEV"},{"Id":62,"MillName":"Fernandina Beach Mil"},{"Id":63,"MillName":"DSI Whse"},{"Id":65,"MillName":"Sunland Whse"},{"Id":20,"MillName":"Hopewell Mill"},{"Id":67,"MillName":"Cincinnati Whse"},{"Id":21,"MillName":"La Tuque Mill"},{"Id":54,"MillName":"Longview Mill"},{"Id":56,"MillName":"NorCal Whse"},{"Id":66,"MillName":"CLG Whse"}],
  showMillName: true

});

let [millTitleState, setMillTitleState] = useState({
  millNames: [{"Id":1,"MillName":"All Mills"}]
});


const showMillNameHandler = (event) => {
  setMillTitleState({
    millNames: [   
    {"Id": 66, "MillName": event.target.value},
  ],
showMillName: true
  });
}

    return(
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
                    <h4 
                      className="center-container"
                    >
                    <MillName
                      className="mill-name-header"
                      millName={millTitleState.millNames[0].MillName}
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
     
               {millListDropDown}
              <MillName 
                click={showMillNameHandler}
                millName={millState.millNames[0].MillName}
              /> 
                <MillName 
               click={showMillNameHandler}  
                millName={millState.millNames[1].MillName}
                value={MillName.millName}
              />
              <MillName 
               click={showMillNameHandler}
                millName={millState.millNames[2].MillName}
                value={MillName.millName}
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
                millName={millState.millNames[19].MillName}
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
                  <MillName 
                click={showMillNameHandler}            
                millName={millState.millNames[43].MillName}
              /> 
                  <MillName 
                click={showMillNameHandler}            
                millName={millState.millNames[44].MillName}
              /> 
             </ Menu>
        </ div>
  )
}

export default Location;


