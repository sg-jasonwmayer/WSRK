/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.scss';
import {
    Switch,
    Route,
    BrowserRouter as Router
  } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Grid,
    IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';

import Layout from '../../layouts/Layout';
import LoadPlanResults from '../LoadPlanResults/LoadPlanResults.js';
import MillOne from '../../containers/MillOne';
import ScenarioBuilder from '../../containers/ScenarioBuilder';
// import LoadPlanner from '../../containers/LoadPlanner';
import MillPreferences from '../../containers/MillPreferences';
import Reports from '../../containers/Reports';
import SomTester from '../../containers/SomTester';


import Location from '../Location';
import UserName from '../UserName';
import EasyAccessIcons from '../EasyAccessIcons/EasyAccessIcons';
import DrawerItems from '../DrawerItems/DrawerItems';


// const useStyles = makeStyles();
const Header = () => {
    // const classes = useStyles();

    return (
        <Router>
            {/* <div className="appheader"> */}
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

        
                <div className="main-contnet">
                    <EasyAccessIcons />
                    <Layout>
                        <Switch>
                            <Route  exact path="/reports" component={Reports} />
                            <Route exact path="/mill-preferences" component={MillPreferences} />
                            <Route exact path="/mill-one" component={MillOne} />
                            <Route exact path="/load-planner" component={LoadPlanResults} />
                            <Route exact path="/som-tester" component={SomTester} />
                            <Route exact path="/scenario-builder" component={ScenarioBuilder} />
                            <Route exact path="/" component={Reports} />
                        </Switch>
                    </Layout>
                </div>
            {/* </div> */}
        </Router>
    )
}

export default Header; 
