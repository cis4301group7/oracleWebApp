/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
// import App from './pages/index';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import './assets/css/material-dashboard-react.css';

import indexRoutes from './routes/index.jsx';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key} />)}
    </Switch>
  </Router>,
  document.getElementById('root')
);
