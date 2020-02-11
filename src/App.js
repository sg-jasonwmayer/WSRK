import React from 'react';
import LoadPlanner from './containers/LoadPlanner/LoadPlanner';
// import ApiTest from './components/Api/Api';
import AppView from './containers/AppView/AppView';

import 'typeface-roboto';

const App = () => {
  return (
    <div> 
      <LoadPlanner />
      {/* <ApiTest /> */}
      <AppView />
    </div>
  );
}

export default App;
