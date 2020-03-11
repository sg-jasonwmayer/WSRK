import React, { useState, useEffect } from 'react';


import AppBar from '@material-ui/core/AppBar';

// import { AgGridReact } from 'ag-grid-react';

import LoadPlanResults from '../../components/LoadPlanResults'

import WRLoader from '../../components/WRLoader';

import { populateSearchResults } from '../../api.js'

import './LoadPlanner.scss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


function LoadPlanner() {

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