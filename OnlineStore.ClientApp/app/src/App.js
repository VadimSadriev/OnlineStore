import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import Layout from './containers/layout/';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import M from '../node_modules/materialize-css/dist/js/materialize.min.js'
import 'material-icons';
import utils from './utils';


class App extends React.Component {

  componentDidMount(){
    utils.materializeInitializer(M);
  }

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
