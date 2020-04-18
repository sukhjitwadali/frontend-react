import React from 'react';
import Demo from './demo'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';

function App() {
  return (
    <div> 
      <Router>  
     <Switch> 
    <Route exact path='/' component={Demo}></Route> 
    {/* <Route exact path='/about' component={About}></Route> 
    <Route exact path='/contact' component={Contact}></Route>  */}
</Switch>
</Router>
    </div>

      );
}

export default App;
