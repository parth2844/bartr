import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './components/pages/landing'
import SignUp from './components/pages/signup'
import DashBoard from './components/pages/dashboard'
import Error from './components/pages/error'

function App() {
  return (    
    <Router>    
        
      <Switch>
        <Route path="/" exact component={Landing} />  
        <Route path="/signup" exact component={SignUp} />      
        <Route path="/dashboard" exact component={DashBoard} />
        <Route component={Error} />
      </Switch>
      
    </Router>    
  );
}

export default App;
