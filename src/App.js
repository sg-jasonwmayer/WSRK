import React from 'react';
import AppView from './containers/AppView/AppView';
import LoadPlanResults from './components/LoadPlanResults'


import 'typeface-roboto';

const App = () => {
  return (
    <div> 
      <AppView />
      <LoadPlanResults />
    </div>
  );
}

export default App;
