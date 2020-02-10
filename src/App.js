import React from 'react';
import Header from './components/Header/Header';
import LoadPlanner from './components/LoadPlanner/LoadPlanner';
// import ApiTest from './components/ApiTest/ApiTest';

import 'typeface-roboto';

const App = () => {
  return (
    <div> 
      <Header />
      <LoadPlanner />
      {/* <ApiTest /> */}
    </div>
  );
}

export default App;
