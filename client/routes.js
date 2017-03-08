import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import SignUp from './components/SignUp';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
});

export default (
  <Route>

    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/about' component={About} />
      <Route path='/sign_up' component={SignUp} />
      <Route path='/contact' component={UserIsAuthenticated(Contact)} />

    </Route>

    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
