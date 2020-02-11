import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PropTypes from 'prop-types';
import classnames from 'classnames';


import logo from '../../assets/westRockLogo.png';

import AppView  from '../AppView';
import LogOut from '../LogOut';
import LoadPlaner from '../LoadPlanner';
import Header from '../Header';
import Reports from '../Reports';
import MillPlan from '../MillPlan';
import SomTester from '../SomTester';
import LoadPlanSelector from '../LoadPlanSelector';

import './main.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelectorOverlayVisible: false,
    };

    this.attachBindings();
  }

  attachBindings() {
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleRefresh() {
    this.forceUpdate();
  }

  handleCollapse() {
    this.setState({
      isSelectorOverlayVisible: false,
    });
  }

  handleExpand() {
    this.setState({
      isSelectorOverlayVisible: true,
    });
  }

  render() {
    const { isSelectorOverlayVisible } = this.state;
    const wrapperClass = classnames('root', this.props.overlayClass);

    return (
      <section className={wrapperClass}>
        <div className="appBar">
          <Header />
        </div>
        <div>
          {isSelectorOverlayVisible && <div className="overlay" />}
          <LoadPlanSelector
            onRefresh={this.handleRefresh}
            onCollapse={this.handleCollapse}
            onExpand={this.handleExpand}
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
                path="/loadplanner"
                render={(props) => (
                  <LoadPlaner 
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
}

export default Main;

Main.propTypes = {
  millName: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  overlayClass: PropTypes.string.isRequired,
  parsedPermissions: PropTypes.object.isRequired,
  termsAccepted: PropTypes.bool.isRequired,
};

Main.defaultProps = {
  userID: "",
  millName: "Mill One",
  termsAccepted: false,
};