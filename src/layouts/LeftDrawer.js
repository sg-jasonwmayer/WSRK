import React from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Typography from '@material-ui/core/Typography';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';

const DrawerOptions =[
  {
    id:'load-planner',
    text:'Load Planner',
    icon:<AccountTreeIcon/>
  },
  {
    id:'mill-preferences',
    text:'Mill Preferences',
    icon:<SettingsIcon/>
  },
  {
    id:'reports',
    text:'Reports',
    icon:<AssessmentIcon/>
  },
  {
    id:'scenariobuilder',
    text:'Scenario Builder',
    icon:<CallSplitIcon />
  },
  {
    id:'somtester',
    text:'SOM Tester',
    icon:<ShutterSpeedIcon/>
  }

];




const LeftDrawer = ({classes,open,handleDrawerClose,theme,handleDrawerClick,selectedIndex})=>{
    return (
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <Typography>Choose Your Task</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {DrawerOptions.map(({id,text,icon}, index) => (
            <ListItem 
                component={Link}
                to={`/${id}`}
                selected={selectedIndex===index}
                button key={id} 
                onClick={handleDrawerClick(index,text)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} ><Link to={`/Users/${text}`}>{text}</Link></ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
   
    );
}

export default LeftDrawer;
