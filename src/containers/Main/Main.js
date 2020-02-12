/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";


import logo from '../../assets/westRockLogo.png';

import AppView  from '../AppView';
import Logout from '../Logout';
import LoadPlanner from '../LoadPlanner';
import LoadPlanSelector from '../LoadPlanSelector';
import MillPlan from '../MillPlan';
import Reports from '../Reports';
import SomTester from '../SomTester';


import './Main.scss';


const main = () => {
 
    return (
      <section>
        <div className="root">
        <AppView />
        </div>
        <div>
          <div className="overlay" /> 
          <LoadPlanSelector />
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
              alt="Westrock Logo"
            />
          </svg>
          <p>This content must be viewed on a larger screen.<span>(Landscape Tablet or larger.)</span></p>
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
                <Logout {...props} />
              )}
            />
            <Redirect path="*" to="/" />
          </Switch>
        </main>
      </section>
    );
  
}

export default main;
