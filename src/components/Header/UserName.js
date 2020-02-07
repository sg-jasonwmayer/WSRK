import React from 'react';

import { 
  IconButton, 
  Menu, 
  MenuItem, 
  Fade 
} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import axios from 'axios';

import './UserName.scss'

const fhenao = 'http://ms00015080d:7050/api/userpreferences/fhenao';

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
        <div 
        className='root'
        >
            <IconButton
                color='inherit'
                size='small'
                aria-controls='fade-menu' 
                aria-haspopup='true' 
                onClick={handleClick}
            >
                <ArrowDropDownIcon 
                  color='primary' />
                <h5 
                  className='user-name-style'>
                    {userName}
                </h5> 
            </ IconButton>
            
            <Menu
                id='fade-menu'
                anchorEl={anchorEl}
                keepMounted
                open={opens}
                onClose={handleClose}
                transitionComponent={Fade}
            >
                <MenuItem 
                  onClick={handleClose}>
                  language:{language}
                </ MenuItem>
                <MenuItem 
                  onClick={handleClose}>
                  units={units}
                </ MenuItem>
            </ Menu>
        </ div>
    )
}