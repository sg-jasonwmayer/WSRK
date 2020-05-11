/* eslint-disable no-unused-vars *//* eslint-disable no-undef*/
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from '../../layouts/Layout';

import LoadPlanResults from '../../components/LoadPlanResults';
import LoadPlanner from '../../containers/LoadPlanner';
import ScenarioBuilder from '../ScenarioBuilder';
import MillPreferences from '../MillPreferences';
import Reports from '../Reports';
import SomTester from '../SomTester';

import './Main.scss';


const Main = () => {
    return (
      <div role="main" className="main-content">
        <Layout>
          <Switch>
            <Route  exact path="/reports" component={Reports} />
            <Route exact path="/mill-preferences" component={MillPreferences} />
            <Route exact path="/load-planner" component={LoadPlanner} />
            <Route exact path="/som-tester" component={SomTester} />
            <Route exact path="/scenario-builder" component={ScenarioBuilder} />
            <Route exact path="/" component={LoadPlanResults} />
          </Switch>  
        </Layout> 
      </div>

    );
}

export default Main;
