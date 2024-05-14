/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import './Header.scss';

const Header = () => {
  
  return (

    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Header;
