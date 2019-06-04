import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import Layout from './containers/layout/';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import 'material-icons';


class App extends React.Component {


  render() {
    return (
      <Router>
        <Layout>
          <BaseRouter />
        </Layout>
      </Router>
    );
  }
}

export default App;
