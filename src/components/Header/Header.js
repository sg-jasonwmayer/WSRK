import React from 'react';

import {
    BrowserRouter as Router,
    Link
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

import Collapsible from 'react-collapsible';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import logo from '../../assets/westRockLogo.png';

import Location from '../Location/Location';
import UserName from '../UserName/UserName';
import OptimizedFilter from '../OptimizedFilter';
import FilterByMode from '../FilterByMode';
import ColumnsToInclude from '../ColumnsToInclude';

import './Header.scss'

const drawerWidth = 390;
const useStyles = makeStyles(theme => ({
    root: { 
      textAlign: "center",
      display: "flex"
    },
    flex: {
        display: "flex"
    },
    // logo:{
    //     margin:"0", 
    //     height: "30px", 
    //     padding: "0",
    //     marginLeft: "5vh"
    // },
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
    button: {
        color: "inherit"
    },
    rightContainer: {
        alignItems: "center",
        display: "flex",
        justify: "center",
        justifyContent: "flex-end"
    },
    centerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
    },
    leftContainer:{
        display: "flex",
        justifyContent:"flex-Start",
        flexDirection: "row",
        justify: "center"
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
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        position: "absolute"
    },
    drawerPaper: {
        width: drawerWidth,
        height: "100%",
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
    quickAccessIconsContainer: {
        paddingTop: "10vh",
        borderRight: "2px"
    },
    quickAccessIcons: {
        marginLeft: "2vh",
        marginTop: "1vh",
        color: "gray",
        opacity: "60%"
    }
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
                         className={classes.leftContainer}
                        >
                          <div>
                                <ClickAwayListener
                                 onClickAway={outsideClickHandler}
                                >
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
                                </ClickAwayListener>
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
                                        <Router>
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
                                                        </ListItemIcon>
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
                                        </Router>
                                    <Divider />
                            
                                    <Divider />
                                        <Collapsible trigger="Filter by Mode">
                                            <FilterByMode />
                                        </Collapsible>
                                        <Divider />
                                        <Collapsible trigger="Optimized Filters">
                                            <OptimizedFilter />
                                        </ Collapsible>
                                        <Collapsible trigger="Columns to Include in Selection Data Grid">
                                            <ColumnsToInclude />
                                        </Collapsible>
                                    </List>
                                </Drawer>
                            </div>  
                            <Router>
                                <Link to="/"> 
                                    <img 
                                    src={logo} 
                                    alt="West Rock Logo" 
                                    className="logo"
                                    />
                                </ Link>
                           </Router>
                        </Grid>

{/* -------------------------------------------Center Container----------------------------------------*/}
                        <Grid
                          item 
                          xs={4} 
                          className={classes.centerContainer}
                        >
                            <Location 
                             className={classes.location}
                            />
                        </Grid>
{/* -------------------------------------------Right Container---------------------------------------- */}
                        <Grid 
                          item
                          xs={4}   
                          className={classes.rightContainer}
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
            <Router>
            <Grid 
             className={classes.quickAccessIconsContainer} 
            >
                <Grid 
                 container
                 spacing={1}
                >
                    <Link to="/load-planner">
                        <IconButton
                        size="small"
                        className={clsx(classes.quickAccessIcons)}
                        > 
                        <AccountTreeIcon />
                        </IconButton>
                    </Link> 
                </Grid>
                <Grid>
                <Link to="/mill-preferences"> 
                    <IconButton
                     size="small"
                     className={clsx(classes.quickAccessIcons)}
                    > 
                      <SettingsIcon />
                    </IconButton>
                </Link> 
                </Grid>
                <Grid>
                    <Link to="/reports"> 
                        <IconButton
                            size="small"
                            className={clsx(classes.quickAccessIcons)}
                        > 
                            <BarChartIcon />
                        </IconButton>  
                    </Link>                         
                </Grid>
                <Grid>
                    <Link to="/scenario-builder"> 
                        <IconButton
                            size="small"
                            className={clsx(classes.quickAccessIcons)}
                        > 
                        <ExtensionIcon />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid>
                    <Link to="/som-tester"> 
                        <IconButton
                        size="small"
                        className={clsx(classes.quickAccessIcons)}
                        > 
                        <ShutterSpeedIcon />
                        </IconButton>
                    </Link>
                </Grid>

            </Grid>
            </Router>
        </div>
    )
}

export default Header;