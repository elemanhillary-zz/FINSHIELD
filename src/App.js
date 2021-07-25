import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Registration from './components/Registration';
import SupplierDashboard from './components/Supplier';
import FeedBack from './components/Feedback';
import ProEntityDashboard from './components/ProEntity/Index';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" render={props => <Registration/>}>
              </Route>
              <Route path="/supplier" render={props => <SupplierDashboard {...props}/>}>
              </Route>
              <Route path="/pentity" component={Registration} />
              <Route path="/feedback" component={FeedBack} />
              <Route path="/proentity" component={ProEntityDashboard} />
            </Switch>
          </Router>
    </div>
  );
}

export default App;
