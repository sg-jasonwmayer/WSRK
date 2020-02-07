import React from 'react';
import Header from './components/Header/Header';
import ApiTest from './components/Header/ApiTest';

const App = () => {
  return (
    <div> 
      <Header 
       millName='Mill Name'
      />
      <ApiTest />
    </div>
  );
}

export default App;
