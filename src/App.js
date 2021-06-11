import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/parts/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './css/App.css';
import './css/Nav.css';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Footer from './components/layout/parts/Footer';
import Productresults from './components/layout/product/Productresults';
import Productdetails from './components/layout/product/Productdetails';
import Scrolltotop from './components/layout/parts/Scrolltotop';
import Application from './components/layout/loan/Application';
import Createadmin from './components/layout/Admin/Createadmin';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Scrolltotop />
          <Route exact path='/' component={Landing} />
          <section className='py-0 py-md-4'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/admin/create' component={Createadmin} />
              <Route exact path='/loan/application' component={Application} />
              <Route exact path='/product-result' component={Productresults} />
              <Route exact path='/product-details' component={Productdetails} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
