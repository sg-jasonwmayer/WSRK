import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';


import WRLoader from '../../components/WRLoader';

import './LoadPlanner.scss';



function LoadPlanner() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  
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
         </Tabs>
      </AppBar>

      <div className="ag-theme-balham" style={ {height: '200px', width: '600px'} }>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
        </AgGridReact>
      </div> 
    </div>
  );
}


export default LoadPlanner;