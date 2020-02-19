import React from 'react';

import { 
  IconButton, 
  Menu, 
  MenuItem
} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import axios from 'axios';

import './UserName.scss'

const fhenao = 'http://ms00015080d:7050/api/userpreferences/mill/fhenao';

let userName = '';
let units = '';
let language = '';

axios.get(fhenao).then((res) => {
  userName = res.data.userName;
  units = res.data.units;
  language = res.data.language;
})
  .catch((err) => {
      console.log(err);
  })
  // console.log(userName);
  // console.log(units);


export default function UserName() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <div className='root'>
          <IconButton
              size='small'
              aria-controls='fade-menu' 
              aria-haspopup='true' 
              onClick={handleClick}
          >
              <ArrowDropDownIcon 
                color='primary' 
              />
              <h5>
                {userName}
              </h5> 
          </IconButton> 
          <Menu
            keepMounted
            id='fade-menu'
            anchorEl={anchorEl}
            open={opens}
            onClose={handleClose}
          >
              <MenuItem 
                onClick={handleClose}
                // language={language}
              >
                Language: English
                </ MenuItem>
                <MenuItem 
                onClick={handleClose}
                // language={language}
              >
                Mill Group: Panther
                </ MenuItem>
                <MenuItem 
                onClick={handleClose}
                // language={language}
              >
                Web Role: Admin
                </ MenuItem>
                <MenuItem 
                onClick={handleClose}
                // language={language}
              >
                Units: Imperial
                </ MenuItem>
              <MenuItem 
                onClick={handleClose}
                units={units}
              />
              
          </ Menu>
      </div>
  )
}

// "userName": "fhenao",
// "lX_UserFullName": "fhenao",
// "language": "English",
// "units": "Imperial",
// "mill_group": "Panther",
// "web_role": "Admin",
// "lx_role": "Admin",
// "include_advisecase": false,
// "lx_system": "Mill"