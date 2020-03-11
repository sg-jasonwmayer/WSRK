/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";


// import logo from '../../assets/westRockLogo.png';


import Logout from '../Logout';
import LoadPlanner from '../LoadPlanner';
// import LoadPlanSelector from '../LoadPlanSelector';
import MillPlan from '../MillPlan';
import Reports from '../Reports';
import SomTester from '../SomTester';


import './Main.scss';


const Main = () => {
    return (
        <main role="main" className="main-content">
          <Switch>
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
    );
}

export default Main;
