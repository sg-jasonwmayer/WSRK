import React,{useContext,Fragment} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import MillContext from '../../contexts/mill-context';

const ActivityIndicator = ()=>{
   const {busy} = useContext(MillContext);
    
    return (
      <Fragment>
        {busy && <LinearProgress color="secondary" />}
      </Fragment>
    );
}

export default ActivityIndicator;