/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import EasyAccessIcons from '../EasyAccessIcons';
import AppBarContainer from '../../containers/AppBarContainer';
import Main from '../../containers/Main';

import './Header.scss';

const Header = () => {
    return (
      <div>
        <Router>
          <div className="header-appbar">
            <AppBarContainer />
          </div>
          <div className="main-content-container"> 
            <EasyAccessIcons className="easy-access-icons" />
            <Main className="main-content" />
          </div>
        </Router>
      </div>
    )
}

export default Header; 