import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import M from 'materialize-css';
import { initNavBar } from '../../utils/materializeInitializer';


class NavBar extends React.Component {

    componentDidMount(){
        initNavBar(M);
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper grey lighten-5">
                            <a href="/#" data-target="nav-bar-collapse" className="sidenav-trigger right black-text"><i className="material-icons">menu</i></a>
                            <Link to="/" className="navbar-brand">Online Store</Link>
                            <ul className="left hide-on-med-and-down">
                                <li><a href="/#">Some link</a></li>
                            </ul>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/#">Login</Link></li>
                                <li><Link to="/signup">Sign up</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="nav-bar-collapse">
                    <li className="sidenav-close"><Link to="#">Login</Link></li>
                    <li className="sidenav-close"><Link to="/signup">Sign up</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;