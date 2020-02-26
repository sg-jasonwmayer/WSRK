import React from 'react';
import './DrawerItems.scss';

import {
    Link,
  } from "react-router-dom";
  import {
    Grid,
    IconButton,
    ClickAwayListener,
    Divider,
    Drawer,
    List,
    ListItemIcon,
    ListItemText,
    ListItem,
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {  useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BarChartIcon from '@material-ui/icons/BarChart';
import ExtensionIcon from '@material-ui/icons/Extension';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CollapsibleItems from '../CollapsibleItems/CollapsibleItems';


import logo from '../../assets/westRockLogo.png';

const useStyles = makeStyles();

const DrawerItems = () => {
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
    <div>
        <Grid
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
                    className="menuButton"
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
    </div>
  );
}

export default DrawerItems;