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
import ActivityIndicator from '../components/ActivityIndicator/';

const drawerWidth = 240;



function Layout(props) {
    const [busy,progressDispatch] = useReducer(ActivityIndicatorReducer,false);
    const [mills,millDispatch] = useReducer(MillReducer,[]);
    const [loadplans,loadplanDispatch] = useReducer(LoadPlanReducer,[]);

    const {children} = props;
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
        <div className="app-layout">
        <CssBaseline />
         <AppBar
            position="fixed"
            className="appBarShift"

          >

          </AppBar>

          <main className="content">
            <div className="toolbar" />
            <ActivityIndicator/>
            {children}
          </main>

        </div>
      </MillContext.Provider>

    );
  }


  export default Layout;
