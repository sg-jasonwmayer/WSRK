import React from 'react';
import Header from '../../components/Header/Header';

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";


import Logout from '../Logout';
import LoadPlanner from '../LoadPlanner';
import MillPreferences from '../MillPreferences';
import Reports from '../Reports';
import SomTester from '../SomTester';
// import Api from '../../components/Api/Api';
// import Main from '../Main/Main';

import './AppView.scss';

const AppView = () => {
  return (
    <div> 
      <Header />
      <Router>
        <Switch> 
        <Route exact path="/reports" component={Reports} />
          {/* <Route
            path="/reports"
            exact
            render={(props) => (
              <Reports
              {...props} 
                > 
                reports        
              </Reports>
            )}
          /> */}
          <Route
            exact
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
              <MillPreferences
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
     </Router>
    </div>
  );
}

export default AppView;
