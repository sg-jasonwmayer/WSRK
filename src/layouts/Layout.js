/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useReducer,useEffect} from 'react';
import clsx from 'clsx';
import {
  useTheme,
  makeStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import MillReducer from '../reducers/MillReducer';
import LoadPlanReducer from '../reducers/LoadPlanReducer';
import ActivityIndicatorReducer from '../reducers/ActivityIndicatorReducer';

import MillContext from '../contexts/mill-context';
import {
  addMill,
  populateMills
} from '../actions/Mills';

import { WebAPIGetCall } from '../actions/webapicalls';
import ActivityIndicator from '../components/ActivityIndicator';

const drawerWidth = 240;

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


function Layout(props) {
    const [busy,progressDispatch] = useReducer(ActivityIndicatorReducer,false);
    const [mills,millDispatch] = useReducer(MillReducer,[]);
    const [loadplans,loadplanDispatch] = useReducer(LoadPlanReducer,[]);

    const {children} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(false);


     useEffect(()=>{
       (async function InvokeAsync(){
         const jsonResponse = await WebAPIGetCall('Query/AllMills', progressDispatch)
         millDispatch(populateMills(jsonResponse))
       })()

      },[]);

    const handleDrawerOpen = () => {
      millDispatch(populateMills(['Fernandina Beach Mill', 'Stevenson Mill','Dublin Mill']));
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

      <MillContext.Provider value={{mills, millDispatch, loadplans, loadplanDispatch, busy, progressDispatch}}>
        <div className={classes.root}>
        <CssBaseline />
         <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >

          </AppBar>

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <ActivityIndicator/>
            {children}
          </main>

        </div>
      </MillContext.Provider>

    );
  }


  export default Layout;
