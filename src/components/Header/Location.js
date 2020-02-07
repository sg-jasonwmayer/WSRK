import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Fade, Grid, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import axios from 'axios';

const url = 'http://ms00015080d:7050/api/userpreferences/fhenao';

const useStyles = makeStyles(theme => ({
    root: {
    },
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

const Location = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
  // eslint-disable-next-line no-unused-vars
    const [useMills, setMills] =useState([]);
    let tempMill = '';
    

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
        axios.get(url)
        .then(resData => {
            // tempMill = resData.data.mills[4].millName;
            console.log(resData.data.mills[3].millName);
        })
    }, [tempMill]);

    return(
        <div className={classes.root}>
             <Grid xs='4' className={classes.centerContainer}>
                <IconButton
                            color="inherit"
                            size='small'
                            className={clsx(classes.menuButton )}
                            aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}
                        > 
                    <ArrowDropDownIcon color={'primary'}/>
                    <h4 className={classes.centerContainer}>{tempMill}</h4> 
                </IconButton>
            </Grid>

            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={opens}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Mill One</MenuItem>
                <MenuItem onClick={handleClose}>Mill Two</MenuItem>
                <MenuItem onClick={handleClose}>Mill Three</MenuItem>
            </Menu>
        </div>
    )
}

export default Location;