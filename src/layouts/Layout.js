/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{useReducer,useEffect} from 'react';
import clsx from 'clsx';
import { useTheme,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import MillReducer from '../reducers/MillReducer';
import LoadPlanReducer from '../reducers/LoadPlanReducer';
import MillContext from '../contexts/mill-context';
import {addMill,populateMills} from '../actions/Mills';
import {WebAPIGetCall} from '../actions/webapicalls';
import ActivityIndicator from '../components/ActivityIndicator';
import ActivityIndicatorReducer from '../reducers/ActivityIndicatorReducer';

const drawerWidth = 240;

<<<<<<< HEAD
=======
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  progressbar: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722


function Layout(props) {
    const [busy,progressDispatch] = useReducer(ActivityIndicatorReducer,false);
    const [mills, millDispatch] = useReducer(MillReducer,[]);
    const [loadplans,loadplanDispatch] = useReducer(LoadPlanReducer,[]);

    const {children} = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(false);


   
     useEffect(()=>{
       (async function InvokeAsync(){
         const jsonResponse = await WebAPIGetCall('Query/AllMills',progressDispatch)
         millDispatch(populateMills(jsonResponse))
       })()
       
      },[]);

    const handleDrawerOpen = () => {
      millDispatch(populateMills(['Fernandina Beach Mill','Stevenson Mill','Dublin Mill']));
      setOpen(true);
      };
    
      const handleDrawerClose = () => {
        millDispatch(addMill('Dhiru Beach Mill'));
        setOpen(false);
      };
      const handleDrawerClick= (index,text) =>(e) =>{
        setSelectedIndex(index);
        setOpen(false);
        console.log(e);
      }
  
    return (

<<<<<<< HEAD
      <MillContext.Provider value={{mills, millDispatch, loadplans, loadplanDispatch, busy, progressDispatch}}>
        <div className="app-layout">
        <CssBaseline />
         <AppBar
=======
      <MillContext.Provider value={{mills,millDispatch,loadplans,loadplanDispatch,busy,progressDispatch}}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
            position="fixed"
            className="appBarShift"

          >
          {
  
         
          }
          </AppBar>
<<<<<<< HEAD

          <main className="content">
            <div className="toolbar" />
=======
        
          <main className={classes.content}>
            <div className={classes.toolbar} />
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
            <ActivityIndicator/>
            {children}
          </main>
        
        </div>
      </MillContext.Provider>
     
    );
  }


export default Layout;