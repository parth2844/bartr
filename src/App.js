import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './components/pages/landing'
import Error from './components/pages/error'

function App() {
  return (    
    <Router>    
        
      <Switch>
        <Route path="/" exact component={Landing} />        
        <Route component={Error} />
      </Switch>
      
    </Router>    
  );
}

export default App;
