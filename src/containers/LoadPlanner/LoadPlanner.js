import React from 'react';


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';


import WRLoader from '../../components/WRLoader';

import './LoadPlanner.scss';



function LoadPlanner() {
  const [value, setValue] = React.useState(0);
  // const [tabs, setTabs] = React.useState([]);

  //const {mills,dispatch} = useContext(MillContext);


  const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  // const handleCheckBoxClick = (event, newValue) => {
  //   setValue(newValue);
  // };
  

  // const handleTabClose = (loadplanname) =>{
  //   setTabs([...tabs.filter(tab=> tab.label!== loadplanname)]);
  //   setValue(0);
  // }

  return (
    <div className="load-planner">
      <AppBar position="static" color="default">
        <WRLoader />
        <Tabs
          value={value}
          onChange={handleChange} 
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {/* <Tab label="Open Load Plans" {...a11yProps(0)} />

          {tabs.map((tab,index)=>{
            return (<Tab key={tab.label} label={tab.label} {...a11yProps({index})} />)
          })} */}

         </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>

        <LoadPlanSearchForm />      
        <LoadPlanResults handleCheckBoxClick={handleCheckBoxClick} handleViewLoadPlan={handleViewLoadPlan} />
      </TabPanel>

       
      {tabs.map((tab,index)=>{
          
            return (
              <TabPanel key={tab.label} value={value} index={index+1}>
              <LoadPlanView tabData={tab.tabData} handleTabClose={handleTabClose} label={tab.label}/>
              </TabPanel>  */}
            )
      {/* })} */}
   
    </div>
  );
}


export default LoadPlanner;