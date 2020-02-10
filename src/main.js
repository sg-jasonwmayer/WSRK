import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import classnames from 'classnames';
import {
  getAdminSectionAccess,
} from 'Utils/permissionsUtils';

import Admin from '../Admin';
import Dashboard from '../Dashboard';
// import ReportBuilder from '../ReportBuilder';
// import GlobalSelector from '../GlobalSelector';
// import LocationManagement from '../LocationManagement';
// import Logout from '../Logout';
// import Messages from '../Messages';
// import OldReports from '../OldReports';
// import Reports from '../Reports';
// import ReportView from '../ReportView';
// import Scheduler from '../Scheduler';
// import Settings from '../Settings';
// import OldSingleReport from '../OldSingleReport';
// import Statements from '../Statements';
// import Equipment from '../Equipment';
// import TransactionFinder from '../TransactionFinder';
// import HierarchySelector from '../HierarchySelector';
import Documents from '../Documents';

import './Main.scss';

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
      isHierarchySelectorOverlayVisible: false,
    });
  }

  handleExpand() {
    this.setState({
      isHierarchySelectorOverlayVisible: true,
    });
  }

  render() {
    const { isHierarchySelectorOverlayVisible } = this.state;
    const wrapperClass = classnames('center-section', this.props.overlayClass);
    const hasAdminPermissions = getAdminSectionAccess(this.props.parsedPermissions);

    return (
      <section className={wrapperClass}>
        <div className="global-filter-bar">
          {isHierarchySelectorOverlayVisible && <div className="overlay" />}
          <HierarchySelector
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
            {this.props.termsAccepted && <Route exact path="/" component={Dashboard} />}
            {!this.props.termsAccepted && <Route exact path="/" component={DashboardLight} />}
            <Route
              path="/global-selector"
              render={(props) => (
                <GlobalSelector {...props} authRole={this.props.authRole} />
              )}
            />

            {this.props.parsedPermissions.reports.canView &&
              <Route
                path="/old-reports"
                exact
                render={(props) => (
                  <OldReports {...props} />
                )}
              />}

            {this.props.parsedPermissions.reports.canView &&
              <Route
                path="/reports"
                exact
                render={(props) => (
                  <Reports {...props} />
                )}
              />}
            {this.props.parsedPermissions.reports.canView &&
              <Route
                path="/old-reports/:reportId(\d+)"
                render={(props) => (
                  <OldSingleReport {...props} authRole={this.props.authRole} />
                )}
              />}
            {this.props.parsedPermissions.reports.canView &&
              <Route
                path="/reports/:reportId(\d+)"
                render={(props) => (
                  <ReportView {...props} authRole={this.props.authRole} />
                )}
              />}
            {this.props.parsedPermissions.reports.canView &&
              <Route
                path="/report-view/:reportId(\d+)"
                render={(props) => (
                  <ReportView {...props} authRole={this.props.authRole} />
                )}
              />}
            {this.props.parsedPermissions.reports.canView &&  // @todo : replace with canCreateCustomReport permission  when available
              <Route
                path="/report-builder/:reportId(\d+)"
                render={(props) => (
                  <ReportBuilder {...props} />
                )}
              />}
            {this.props.parsedPermissions.reports.canView &&  // @todo : replace with canCreateCustomReport permission  when available
              <Route
                path="/report-builder"
                render={(props) => (
                  <ReportBuilder {...props} />
                )}
              />}
            {
              /* @todo, 2018-06-14 (vwilson@cardinalsolutions.com)
                        scoped to canView reports for now, until canSchedule permissions
                        is added to some test users
              */
              this.props.parsedPermissions.reports.canView &&
              <Route
                path="/schedule"
                render={(props) => (
                  <Scheduler {...props} />
                )}
              />
            }
            {this.props.parsedPermissions.personalInformation.canEdit &&
              <Route
                path="/settings"
                render={(props) => (
                  <Settings {...props} authRole={this.props.authRole} />
                )}
              />
            }

            {this.props.parsedPermissions.merchants.canView &&
              <Route
                path="/locations/management"
                render={(props) => (
                  <LocationManagement {...props} />
                )}
              />
            }

            {this.props.parsedPermissions.merchants.canView &&
              <Route
                path="/managelocations"
                render={(props) => (
                  <LocationManagement {...props} />
                )}
              />
            }

            {this.props.parsedPermissions.merchants.canView &&
              <Route
                path="/locations/equipment"
                render={(props) => (
                  <Equipment {...props} />
                )}
              />
            }

            {/* @TODO currently, these all point to Admin. eventually they'll point to their own containers. */}
            {hasAdminPermissions && <Route
              path="/admin"
              render={(props) => (
                <Admin {...props} authRole={this.props.authRole} />
              )}
            />}
            {hasAdminPermissions && <Route
              path="/user-management"
              render={(props) => (
                <Admin {...props} authRole={this.props.authRole} />
              )}
            />}
            {hasAdminPermissions && <Route
              path="/manage-notifications"
              render={(props) => (
                <Admin {...props} authRole={this.props.authRole} />
              )}
            />}
            {hasAdminPermissions && <Route
              path="/banking-details"
              render={(props) => (
                <Admin {...props} authRole={this.props.authRole} />
              )}
            />}
            {hasAdminPermissions && <Route
              path="/add-statement-notice"
              render={(props) => (
                <Admin {...props} authRole={this.props.authRole} />
              )}
            />}

            {this.props.parsedPermissions.transactions.canSearch &&
              <Route
                path="/transaction-finder"
                render={(props) => (
                  <TransactionFinder {...props} authRole={this.props.authRole} />
                )}
              />}

            {this.props.parsedPermissions.statements.canView &&
              <Route
                path="/statements"
                render={(props) => (
                  <Statements key="merchant" {...props} userType={'merchant_statement_master'} />
                )}
              />}

            {this.props.parsedPermissions.statements.canView &&
              <Route
                path="/chain-statements"
                render={(props) => (
                  <Statements key="chain" {...props} userType={'chain_statement_master'} />
                )}
              />}

            {this.props.parsedPermissions.statements.canView &&
              <Route
                path="/reports/chain-aggregate"
                render={(props) => (
                  <Statements key="aggregate" {...props} userType={'chain_aggregate'} />
                )}
              />}
            {/* @TODO currently, these all point to Messages. eventually they'll point to their own containers. */}
            {<Route
              path="/messages"
              exact
              render={(props) => (
                <Messages {...props} />
                )}
            />}
            {this.props.parsedPermissions.messages.canView && // @todo : replace with correct permission when available
              <Route
                path="/messages/notifications"
                render={(props) => (
                  <Messages {...props} authRole={this.props.authRole} />
                )}
              />}
            {this.props.parsedPermissions.messages.canView && // @todo : replace with correct permission when available
              <Route
                path="/messages/statements"
                render={(props) => (
                  <Messages {...props} authRole={this.props.authRole} />
                )}
              />}
            {
              <Route
                path="/messages/documents"
                render={(props) => (
                  <Documents {...props} />
                )}
              />}
            {this.props.parsedPermissions.messages.canView && // @todo : replace with correct permission when available
              <Route
                path="/messages/images"
                render={(props) => (
                  <Messages {...props} authRole={this.props.authRole} />
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
