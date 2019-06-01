import React from 'react';
import NavBar from '../../components/navbar';
import './style.css';

class Layout extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <div className="content-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;