import React from 'react';
import { Link } from 'react-router-dom';
import http from '../../utils/http';


class Login extends React.Component {

    state = {
        token: null,
        testStr: null
    }

    getToken = () => {
        http.post('/account/login/', {
            userNameOrEmail: 'xayah',
            password: 'xayah'
        }).then(res => {
            res = JSON.parse(res.data);
            this.setState({
                token: res.responseObject.authToken.access
            })
            console.log(res);
        }, res => {
            console.log(res);
        })
    }
    getString = () => {
        http.get('/account/test', {
            data: {
                userNameOrEmail: 'xayah',
                password: 'xayah'
            },
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            }
        }).then(res => {
            this.setState({
                testStr: res.data
            })
            console.log(res);
        }, res => {
            console.log(res);
        })
    }

    render() {

        return (
            <div className="container">
                <button onClick={this.getString}>authRequest</button>
                <button onClick={this.getToken}>getToken</button>
                {this.state.testStr} <br />
                {this.state.token}
                <div className="row">
                    <div className="col s12 push-m3 m6 push-l3 l6">
                        <div className="card">
                            <div className="card-title center-align">
                                <span>Login with username or email.</span>
                            </div>
                            <div className="row">
                                <div className="col s10 offset-s1 m6 offset-m3 l6 offset-l3">
                                    <div className="input-field">
                                        <input id="user_name" type="text" />
                                        <label htmlFor="user_name">Login</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="password" type="password" />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <div className="row">
                                    <button className="col s10 offset-s1 m4 offset-m4 l4 offset-l4 waves-effect btn">Login</button>
                                </div>
                                <div className="row">
                                    <div className="col s12 m12 l12 center-align">
                                        Still dont have an account? <strong>Create One!</strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <Link to="/signup" className="col s10 offset-s1 m4 offset-m4 l4 offset-l4 waves-effect waves-light btn">Create</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login