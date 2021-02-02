import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Users from './Users/Users';
import Main from './Main/Main';
import UserId from './Users/UserId';
import Error from './Error';

import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <>
      {/*<Header />*/}
      <Router>
        <nav>
          <li><NavLink exact to="/" activeClassName="primer">Main</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </nav>
        <Switch>
          <Route exact path="/" component={Main} />
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
