import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import NotFound from './components/notFound';

class Routers extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        );
    }
}

export default Routers;