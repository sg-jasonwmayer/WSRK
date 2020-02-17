import React from 'react';
import AppView from './containers/AppView/AppView';
import LoadPlanResults from './components/LoadPlanResults'

import Header from './components/Header/Header';

import './App.scss'
import 'typeface-roboto';

const App = () => {
  return (
    <div> 
      <AppView />
      <LoadPlanResults />
      <Header />
    </div>
  );
}

export default App;
