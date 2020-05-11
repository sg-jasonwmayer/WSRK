import React,{useContext,Fragment} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';


import MillContext from '../../contexts/mill-context';


import './ActivityIndicator.scss';

const ActivityIndicator = ()=>{
   const busy = useContext(MillContext);
    
    return (
      <Fragment>
        <div 
          className="activity-monitor"
        >
        {busy && <LinearProgress color="secondary" />}
        </div>
      </Fragment>
    );
}

export default ActivityIndicator;