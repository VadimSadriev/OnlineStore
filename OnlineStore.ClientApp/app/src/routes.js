import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import Signup from './containers/signup';
import Login from './containers/login';
import NotFound from './components/notFound';

class Routers extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        );
    }
}

export default Routers;