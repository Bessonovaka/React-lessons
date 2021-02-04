import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Users from './Users/Users';
import Main from './Main/Main';
import UserId from './Users/UserId';
import Error from './Error';
import Lifecycle from './Lifecycle/Lifecycle';

import {BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';


function App() {
  return (
    <>
      {/*<Header />*/}
      <Router>
        <nav>
          <li><NavLink to="/about">События</NavLink></li>
          <li><NavLink exact to="/" activeClassName="primer">State - ООП подход</NavLink></li>
          <li><NavLink to="/users">State - функциональный подход</NavLink></li>
          <li><NavLink to="/lifecycle">Lifecycle</NavLink></li>
        </nav>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/lifecycle" render={(arg)=>(<Lifecycle arg={77}/>)} />
          <Route path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userName" component={UserId} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
