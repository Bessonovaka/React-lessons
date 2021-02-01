import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Users from './Users/Users';
import Main from './Main/Main';
import UserId from './Users/UserId';
import Error from './Error';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      {/*<Header />*/}
      <Router>
        <nav>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
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
