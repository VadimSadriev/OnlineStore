import React from 'react';
import './style.css';


class NavBar extends React.Component {

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper grey lighten-5">
                            <a data-target="nav-bar-collapse" className="sidenav-trigger right black-text"><i className="material-icons">menu</i></a>
                            <a className="navbar-brand">
                                Online Store
                            </a>
                            <ul className="left hide-on-med-and-down">
                                <li><a>Some link</a></li>
                            </ul>
                            <ul className="right hide-on-med-and-down">
                                <li><a>Login</a></li>
                                <li><a>Sign up</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="nav-bar-collapse">
                    <li><a>Login</a></li>
                    <li><a>Sign up</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;