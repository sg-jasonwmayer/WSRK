/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import React, { useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PropTypes from 'prop-types';


import logo from '../../assets/westRockLogo.png';

import AppView  from '../AppView';
import LogOut from '../LogOut';
import LoadPlanner from '../LoadPlanner';
import Header from '../../Components/Header';
import Reports from '../Reports';
import MillPlan from '../MillPlan';
import SomTester from '../SomTester';
import LoadPlanSelector from '../LoadPlanSelector';

import './Main.scss';

const main = props => {
  const [ overlayState, setOverlayState ] = useState({
    isSelectorOverlayVisible: true,
  });

    return (
      <section>
        <div className="app-bar">
          <Header />
        </div>
        <div>
          {isSelectorOverlayVisible ? <div className="overlay" /> : <div />}
          <LoadPlanSelector
            click={setOverlayState}
            onExpand={overlayState}
          />
        </div> 
        <div className="mobile-message">
          <svg 
            version="1.1" 
            id="mobile-svg" 
            xmlns="http://www.w3.org/2000/svg" 
            x="0px" 
            y="0px" 
            viewBox="0 0 1366 912"
          >
            <img 
              src={logo} 
            />
          </svg>
          <p>This content must be viewed on a larger screen.<span>(Landscape iPad or larger.)</span></p>
        </div>

        <main role="main" className="main-content">
          <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <AppView 
                    {...props} 
                  />
                )}
              /> 
              <Route
                path="/reports"
                exact
                render={(props) => (
                  <Reports 
                    {...props} 
                  />
                )}
              />
              <Route
                path="/load-planner"
                render={(props) => (
                  <LoadPlanner
                    {...props} 
                  />
                )}
              />
              <Route
                path="/mill-plan"
                render={(props) => (
                  <MillPlan 
                    {...props} 
                  millName={this.props.millName} 
                  />
                )}
              />
              <Route
                path="/som-tester"
                render={(props) => (
                  <SomTester 
                    {...props} 
                    userID={this.props.userID} 
                  />
                )}
              />

            <Route
              path="/logout"
              render={(props) => (
                <LogOut {...props} />
              )}
            />
            <Redirect path="*" to="/" />
          </Switch>
        </main>
      </section>
    );
  
}

export default main;


main.propTypes = {
  millName: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  overlayClass: PropTypes.string.isRequired,

};

main.defaultProps = {
  userID: "",
  millName: "Mill One",
  termsAccepted: false,
};

