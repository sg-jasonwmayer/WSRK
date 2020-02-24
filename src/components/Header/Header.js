import React from 'react';
import './Header.scss';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Grid,
    IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';

import Location from '../Location';
import UserName from '../UserName';
import EasyAccessIcons from '../EasyAccessIcons/EasyAccessIcons';
import DrawerItems from '../DrawerItems/DrawerItems';


const useStyles = makeStyles();

const Header = () => {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <AppBar
                className="appBar"
                color="inherit"
                >
                    <Toolbar>
                        <Grid
                        container
                        >
                            <Grid
                            item
                            xs={4}
                            >
                                <DrawerItems/>
                            </Grid>

    {/* -------------------------------------------Center Container----------------------------------------*/}
                            <Grid
                            item
                            xs={4}
                            className="centerContainer"
                            >
                                <Location
                                />
                            </Grid>
    {/* -------------------------------------------Right Container---------------------------------------- */}
                            <Grid
                            item
                            xs={4}
                            className='rightContainer'
                            >
                                <IconButton
                                color="inherit"
                                size="small"
                                />
                                <UserName />
                                <IconButton
                                color="inherit"
                                size="small"
                                >
                                    <NotificationsIcon
                                    color="action"
                                    />
                                </IconButton>
                                <IconButton
                                color="inherit"
                                size="small"
                                >
                                    <EmailIcon
                                        color="action"
                                    />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                {/* ------------------------Icons below header (left) ------------ */}
                <EasyAccessIcons />
            </div>
        </Router>
    )
}

export default Header; 
