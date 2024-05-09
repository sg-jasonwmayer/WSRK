/* eslint-disable no-unused-vars *//* eslint-disable no-undef*/
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from '../../layouts/Layout';

<<<<<<< HEAD
// import logo from '../../assets/westRockLogo.png';


import Logout from '../Logout';
import LoadPlanner from '../LoadPlanner';
// import LoadPlanSelector from '../LoadPlanSelector';
import MillPlan from '../MillPlan';
=======
import LoadPlanResults from '../../components/LoadPlanResults';
import LoadPlanner from '../../containers/LoadPlanner';
import ScenarioBuilder from '../ScenarioBuilder';
import MillPreferences from '../MillPreferences';
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
import Reports from '../Reports';
import SomTester from '../SomTester';

import './Main.scss';


const Main = () => {
    return (
      <div role="main" className="main-content">
        <Layout>
          <Switch>
<<<<<<< HEAD
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
=======
            <Route  exact path="/reports" component={Reports} />
            <Route exact path="/mill-preferences" component={MillPreferences} />
            <Route exact path="/load-planner" component={LoadPlanner} />
            <Route exact path="/som-tester" component={SomTester} />
            <Route exact path="/scenario-builder" component={ScenarioBuilder} />
            <Route exact path="/" component={LoadPlanResults} />
          </Switch>  
        </Layout> 
      </div>

>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722
    );
}

export default Main;
