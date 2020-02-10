import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import classnames from 'classnames';

import Main from '../../Containers/Main/Main';
import Reports  from '../../Containers/Reports/Reports';
import MillPlan from '../../Containers/Reports/MillPlan';

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
          {isSelectorOverlayVisible && <div className="overlay" />}
          <Header
            onRefresh={this.handleRefresh}
            onCollapse={this.handleCollapse}
            onExpand={this.handleExpand}
          />
        </div>
        <div className="mobile-message">
          <svg version="1.1" id="mobile-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1366 912">
            <path d="M1322.8,8c19.4,0,35.2,15.8,35.2,35.2v825.6c0,19.4-15.8,35.2-35.2,35.2H43.2C23.8,904,8,888.2,8,868.8V43.2C8,23.8,23.8,8,43.2,8H1322.8 M72,839.7h8h1110h8v-8V80.3v-8h-8H80h-8v8v751.4V839.7 M1322.8,0H43.2C19.4,0,0,19.4,0,43.2v825.6C0,892.6,19.4,912,43.2,912h1279.6c23.8,0,43.2-19.4,43.2-43.2V43.2C1366,19.4,1346.6,0,1322.8,0L1322.8,0z M80,831.7V80.3h1110v751.4H80L80,831.7z" />
            <path d="M1274,411c24.8,0,45,20.2,45,45s-20.2,45-45,45s-45-20.2-45-45S1249.2,411,1274,411 M1274,403c-29.3,0-53,23.7-53,53s23.7,53,53,53s53-23.7,53-53S1303.3,403,1274,403L1274,403z" />
            <path d="M1288.3,441.7v28.6h-28.6v-28.6H1288.3 M1296.3,433.7h-44.6v44.6h44.6V433.7L1296.3,433.7z" />
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
                path="/mill-loadplans"
                render={(props) => (
                  <MillPlan
                  {...props} 
                  millPlan={this.props.millPlan} 
                  />
                )}
              />
              <Route
                path="/som-tester"
                render={(props) => (
                  <SomTester 
                    {...props} 
                    authRole={this.props.authRole} 
                  />
                )}
              />}

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
}

export default Main;

Main.propTypes = {
  authRole: PropTypes.object,
  overlayClass: PropTypes.string.isRequired,
  parsedPermissions: PropTypes.object.isRequired,
  termsAccepted: PropTypes.bool.isRequired,
};

Main.defaultProps = {
  authRole: {},
  termsAccepted: false,
};
