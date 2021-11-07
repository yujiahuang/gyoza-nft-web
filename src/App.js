import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-xxxxxxxxx');

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route path="/" exact component={Home} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;