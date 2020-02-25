import React from 'react';

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

import {
    ClickAwayListener,
    AppBar,
    Toolbar,
    Grid,
    Divider,
    Drawer,
    List,
    ListItemIcon,
    ListItemText,
    ListItem,
    IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {  useTheme } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BarChartIcon from '@material-ui/icons/BarChart';
import ExtensionIcon from '@material-ui/icons/Extension';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import logo from '../../assets/westRockLogo.png';

import Location from '../Location';
import UserName from '../UserName';
import CollapsibleItems from '../CollapsibleItems/CollapsibleItems';
import EasyAccessIcons from '../EasyAccessIcons/EasyAccessIcons';

import './Header.scss';

const drawerWidth = 400;
const useStyles = makeStyles(theme => ({
    appBar:{
        backgroundColor: "white",
        position: "fixed",
        borderBottom: "5px solid #ff8200",
        height: "7vh",
        transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easingOut,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        margin: "0",
        padding: "0"
    },
    hide: {
        display: "none",
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.leavingScreen,
            }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            }),
        marginLeft: 0,
    },
}));

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const drawerOpenHandler = () => {
        setOpen(true);
    };

    const drawerCloseHandler = () => {
        setOpen(false);
    };

    const outsideClickHandler = () => {
        setOpen(false);
      };

    return (
        <Router>
            <div className={classes.root}>
                <AppBar
                className={classes.appBar}
                >
                    <Toolbar>
                        <Grid
                        container
                        >
                            <Grid
                            item
                            xs={4}
                            className="leftContainer"
                            >
                                <ClickAwayListener
                                onClickAway={outsideClickHandler}
                                >
                                    <div>
                                        <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={drawerOpenHandler}
                                        edge="start"
                                        className={clsx(classes.menuButton, open && classes.hide)}
                                        >
                                            <MenuIcon
                                            color="primary"
                                            />
                                        </IconButton>
                                        <Drawer
                                        className={classes.drawer}
                                        variant="persistent"
                                        anchor="left"
                                        open={open}
                                        classes={{paper: classes.drawerPaper}}
                                        >
                                            <div className='drawer-header'>
                                                <IconButton
                                                onClick={drawerCloseHandler}
                                                >
                                                {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                                </IconButton>
                                            </div>
                                            <Divider />
                                            <List>
                                                <nav>
                                                    <Link to="/load-planner">
                                                        <ListItem button>
                                                            <ListItemIcon>
                                                                <AccountTreeIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary={"Load Planner"}
                                                            />
                                                        </ListItem>
                                                    </Link>
                                                    <Link to="/mill-preferences">
                                                        <ListItem button>
                                                            <ListItemIcon>
                                                            <SettingsIcon />
                                                            </ ListItemIcon>
                                                            <ListItemText
                                                            primary={"Mill Preferences"}
                                                            />
                                                        </ListItem>
                                                    </Link>
                                                    <Link to="/reports">
                                                        <ListItem
                                                        button
                                                        >
                                                        <ListItemIcon>
                                                            <BarChartIcon />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={"Reports"}
                                                        />
                                                        </ListItem>
                                                    </Link>
                                                    <Link to="/scenario-builder">
                                                        <ListItem button>
                                                            <ListItemIcon>
                                                                <ExtensionIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary={"Scenario Builder"}
                                                            />
                                                        </ListItem>
                                                    </Link>
                                                    <Link to="/som-tester">
                                                        <ListItem
                                                        button>
                                                            <ListItemIcon>
                                                                <ShutterSpeedIcon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary={"Som Tester"}
                                                            />
                                                        </ListItem>
                                                    </Link>
                                                </nav>
                                                <Divider />
                                                <CollapsibleItems/>
                                            </List>
                                        </Drawer>
                                    </div>
                                </ClickAwayListener>

                                <Link to="/">
                                    <img
                                    src={logo}
                                    alt="West Rock Logo"
                                    className="logo"
                                />
                                </Link>
                            </Grid>

    {/* -------------------------------------------Center Container----------------------------------------*/}
                            <Grid
                            item
                            xs={4}
                            className="centerContainer"
                            >
                                <Location
                                className={classes.location}
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
                                className={clsx(classes.menuButton)}
                                />
                                <UserName />
                                <IconButton
                                color="inherit"
                                size="small"
                                className={clsx(classes.menuButton)}
                                >
                                    <NotificationsIcon
                                    color="action"
                                    />
                                </IconButton>
                                <IconButton
                                color="inherit"
                                size="small"
                                className={clsx(classes.menuButton)}
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
