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
import MillPlan from '../MillPlan';
import Reports from '../Reports';
import SomTester from '../SomTester';
// import Api from '../../components/Api/Api';
// import Main from '../Main/Main';


const AppView = () => {
  return (
    <div> 
      <Router>
      <Header />
      <div>
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
     </div>
     </Router>
      {/* <Api />  */}
      {/* <Main /> */}
    </div>
    
  );
}

export default AppView;
