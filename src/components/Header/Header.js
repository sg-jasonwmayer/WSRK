import React from 'react';

import { ClickAwayListener, AppBar, Toolbar, Grid, Divider, Drawer, List, ListItemIcon, ListItemText, ListItem, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

import clsx from 'clsx';

import logo from '../../assets/westRockLogo.png';
import Location from './Location';
import UserName from './UserName';

import './Header.scss'

const drawerWidth = 290;

const useStyles = makeStyles(theme => ({
    root: { 
      textAlign: 'center',
      display: 'flex'
    },
    flex: {
        display: 'flex'
    },
    // logo:{
    //     margin:'0', 
    //     height: '30px', 
    //     padding: '0',
    //     marginLeft: '5vh'
    // },
    appBar:{
        backgroundColor: 'white',
        position: 'fixed',
        borderBottom: '5px solid #ff8200',
        height: '7vh',
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    button: {
        color: 'inherit'
    },
    rightContainer: {
        alignItems: 'center',
        display: 'flex',
        justify: 'center',
        justifyContent: 'flex-end'
    },
    centerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
    },
    leftContainer:{
        display: 'flex',
        justifyContent:'flex-Start',
        flexDirection: 'row',
        justify: 'center'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        margin: '0',
        padding: '0'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        position: 'absolute'
    },
    drawerPaper: {
        width: drawerWidth,
        height: '56%',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            }),
        marginLeft: 0,
    },
    quickAccessIconsContainer: {
        paddingTop: '10vh',
        borderRight: '2px'
    },
    quickAccessIcons: {
        marginLeft: '2vh',
        marginTop: '1vh',
        color: 'gray',
        opacity: '60%'
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
            <AppBar className={classes.appBar}>
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
                                     color='inherit'
                                     aria-label='open drawer'
                                     onClick={drawerOpenHandler}
                                     edge='start'
                                     className={clsx(classes.menuButton, open && classes.hide)}
                                    >
                                      <MenuIcon 
                                       color='primary' 
                                      />
                                    </ IconButton>
                                </ ClickAwayListener>
                                <Drawer
                                  className={classes.drawer}
                                  variant='persistent'
                                  anchor='left'
                                  open={open}
                                  classes={{ paper: classes.drawerPaper }}
                                >
                                    <div className={classes.drawerHeader}>
                                        <IconButton onClick={drawerCloseHandler}>
                                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                        </IconButton>
                                    </div>
                                    <Divider />

                                    <List>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <AccountTreeIcon />
                                            </ ListItemIcon>
                                            <ListItemText primary={'Load Planner'} />
                                        </ ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <SettingsIcon />
                                            </ ListItemIcon>
                                            <ListItemText primary={'Mill Preferences'} />
                                        </ ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <BarChartIcon />
                                            </ ListItemIcon>
                                            <ListItemText primary={'Reports'} />
                                        </ ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <ExtensionIcon />
                                            </ ListItemIcon>
                                            <ListItemText primary={'Scenario Builder'} />
                                        </ ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                             <ShutterSpeedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={'Som Tester'} />
                                        </ ListItem>
                                    </ List>
                                    <Divider />
                                </ Drawer>
                            </div>  
                            <img 
                             src={logo} 
                             alt='West Rock Logo' 
                             className='logo'
                           />
                        </Grid>

{/* -------------------------------------------Center Container----------------------------------------*/}
                        <Grid
                          item 
                          xs={4} 
                          className={classes.centerContainer}
                        >
                            <Location 
                             item
                             className={classes.location}
                            />
                        </ Grid>
{/* -------------------------------------------Right Container---------------------------------------- */}
                        <Grid 
                          item
                          xs={4}   
                          className={classes.rightContainer}
                        >    
                            <IconButton
                             color='inherit'
                             size='small'
                            >
                                <UserName />
                            </ IconButton>

                            <IconButton
                             color='inherit'
                             size='small'
                             className={clsx(classes.menuButton )}
                            > 
                                <NotificationsIcon color='action'/> 
                            </IconButton>
                             
                            <IconButton
                             color='inherit'
                             size='small'
                             className={clsx(classes.menuButton )}
                            > 
                                <EmailIcon color='action'    />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            {/* ------------------------Icons below header (left) ------------ */}
            <Grid 
             className={classes.quickAccessIconsContainer} 
            >

                <Grid 
                 container
                 spacing={3}
                >
                    <IconButton
                     size='small'
                     className={clsx(classes.quickAccessIcons )}
                    > 
                        <AccountTreeIcon />
                    </IconButton>
                </Grid>

                <Grid>
                    <IconButton
                     size='small'
                     className={clsx(classes.quickAccessIcons )}
                    > 
                     <SettingsIcon />
                    </ IconButton>
                </ Grid>

                <Grid>
                    <IconButton
                        size='small'
                        className={clsx(classes.quickAccessIcons )}
                    > 
                        <BarChartIcon />
                    </ IconButton>
                </ Grid>

                <Grid>
                    <IconButton
                        size='small'
                        className={clsx(classes.quickAccessIcons )}
                    > 
                        <ExtensionIcon />
                    </IconButton>
                </Grid>

                <Grid>
                    <IconButton
                        size='small'
                        className={clsx(classes.quickAccessIcons )}
                    > 
                        <ShutterSpeedIcon />
                    </ IconButton>
                </ Grid>
            </ Grid>

        </ div>
    )
}

export default Header;