import React from 'react';
import { IconButton, Menu, MenuItem, Fade } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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
        // console.log(err);
    })
    // console.log(userName);
    // console.log(units);

const useStyles = makeStyles(theme => ({
    root: {
    },
    userNameStyle: {
        color: '#004B87',
        margin:'0',
        paddingRight: '3vh'
    },
}));

export default function UserName() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className='classes.root'>
            <IconButton
                color="inherit"
                size="small"
                aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}
            >
                <ArrowDropDownIcon color='primary' />
                <h5 className={classes.userNameStyle}>{userName}</h5> 
            </IconButton>
            
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={opens}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Language:{language}</MenuItem>
                <MenuItem onClick={handleClose}>Units: {units}</MenuItem>
            </Menu>
        </div>
    )
}