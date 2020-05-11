<<<<<<< HEAD
import React, { useState, useEffect } from 'react';


import AppBar from '@material-ui/core/AppBar';

// import { AgGridReact } from 'ag-grid-react';

import LoadPlanResults from '../../components/LoadPlanResults'

import WRLoader from '../../components/WRLoader';

import { populateSearchResults } from '../../api.js'
=======
import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LoadPlanResults from './LoadPlanResults';
import LoadPlanSearchForm from './LoadPlanSearchForm';
import {WebAPIGetCall} from '../../actions/webapicalls';
import MillContext from '../../contexts/mill-context';
import {LoadPlanView} from './LoadPlanView';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722

import './LoadPlanner.scss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function LoadPlanner() {
<<<<<<< HEAD

  const [mill, setMill] = React.useState(null);
  const [mode, setMode] = React.useState(null);
  const [loadplanname, setLoadPlanName] = React.useState(null);
  const [searchcondition, setSearchCondition ] = React.useState(null);

  let loadplanDispatch = null;

    useEffect((loadplans)=>{
        if(!loadplans) return;
        if(loadplans.loadplanname)
            setLoadPlanName(loadplans.loadplanname)
        if(loadplans.mode)
            setMode(loadplans.mode)
        if(loadplans.mill)
            setMill(loadplans.mill)
        if(loadplans.searchcondition)
            setSearchCondition(loadplans.searchcondition)
        async function InvokeAsync(){
            const jsonResponse = await loadplanDispatch(`Query/SearchLoadPlans/${mode}/${mill}/${searchcondition}/${loadplanname}`,[])
            loadplanDispatch(populateSearchResults(jsonResponse))
      }

        InvokeAsync();
            
    },[loadplanDispatch, loadplanname, mill, mode, searchcondition]);

  const [ gridState ] = useState({
 columnDefs: [{ field: 'name', headerName: 'LoadPlan Name'}, { field: 'batchfield', headerName: 'Batch field'}, { field: 'shipto', headerName: 'Ship To'}, { field: 'mode', headerName: 'Mode'}, { field: 'submitedBy',  headerName: 'Submited By'},{ field: 'approvedBy',  headerName: 'Approved By'}, { field: 'action', headerName: 'Action'},
    ], rowData: [{LoadPlanName: "Toyota", batchField: "Celica", shipTo: 35000, submittedBy: "joshua jones", approvedBy:"me", action: "yes"  },{LoadPlanName: "ferdy", batchField: "nandiaa", shipTo: 35000, submittedBy: "joshua jones", approvedBy:"me", action: "yes"  }
    ]
});

    return (
        <div
            className="ag-theme-balham"
            style={{ height: '600px', width: '1350px' }}
=======
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = React.useState([]);

  //const {mills,dispatch} = useContext(MillContext);
  const {progressDispatch} = useContext(MillContext);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  const handleCheckBoxClick = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleViewLoadPlan = (loadplanid,loadplanname) => {
    //console.log("handleViewLoadPlan "+loadplanid+" "+loadplanname);

    const tabcount =tabs.length;

    let response = undefined;
    async function InvokeAsync(){
      response = await WebAPIGetCall(`LoadPlanViewer/GetLoadPlanDetails/${loadplanid}`,progressDispatch);
    }
    InvokeAsync().then(() => {
      setTabs([...tabs,
        {
          label:loadplanname,
          tabData:{
            ...response
          }
        }
      ]);
      setValue(tabcount+1);
    });
      
  }

  const handleTabClose = (loadplanname) =>{
    setTabs([...tabs.filter(tab=> tab.label!== loadplanname)]);
    setValue(0);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange} 
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
        >
          <WRLoader />
          <AppBar />
          <LoadPlanResults 
           columnDefs={gridState.columnDefs}
            rowData={gridState.rowData}
          />
            {/* <AgGridReact
                columnDefs={gridState.columnDefs}
                rowData={setGridState.rowData}>
            </AgGridReact> */}
        </div>
    );
}

export default LoadPlanner;