import React from 'react';
import Header from './components/Header/Header';
import Layout from '../layouts/Layout';
import './App.scss'
import 'typeface-roboto';

const App = () => {
  return (
    <div> 
      <Layout>
      <Header />
      </Layout>
    </div>
  );
}

export default App;
