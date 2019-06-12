import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/signup';
import { isEmail } from '../../utils/validationHelpers';
import axios from '../../utils/http';

function UserInput() {
    this.value = '';
    this.isValid = false;
    this.error = null;
}

class Signup extends React.Component {

    //TODO: show toast error once toasts are exist in app
    state = {
        userName: new UserInput(),
        email: new UserInput(),
        password: new UserInput(),
        confirmPassword: new UserInput(),
        viewError: null
    }

    componentWillReceiveProps(newProps){
        this.setState({
            viewError: newProps.signupMessage
        })
    }

    onSignup = () => {

        for (var key in this.state){
           if (this.state[key]){
            if (!this.state[key].hasOwnProperty('isValid')){
                continue;
            }

            if (!this.state[key].isValid){
                this.setState({
                    viewError: 'There are empty or invalid inputs'
                })
                return;
            }
           }
        }

        this.setState({
            viewError: null
        })

        this.props.signup(
             this.state.userName.value,
             this.state.email.value,
             this.state.password.value,
             this.state.confirmPassword.value);
    }

    onUserNameChanged = (e) => {
        const userName = e.target.value;

        if (userName) {
            this.setState({
                userName: {
                    isValid: true,
                    value: userName,
                    error: null
                }
            })
        }
        else {
            this.setState({
                userName: {
                    isValid: false,
                    error: null
                }
            })
        }
    }


    onEmailChanged = (e) => {
        const email = e.target.value;

        if (email){
            if (isEmail(email)){
                this.setState({
                    email: {
                        isValid: true,
                        value: email,
                        error: null
                    }
                })
            }
            else {
                this.setState({
                    email: {
                        isValid: false,
                        error: "Incorrect email"
                    }
                })
            }
        }
        else {
            this.setState({
                email: {
                    isValid: false,
                    error: null
                }
            })
        }
    }

    onPasswordChanged = (e) => {
        const password = e.target.value;
        
        if (password){
            this.setState({
                password: {
                    value: password,
                    isValid: true,
                    error: null
                }
            })
        }
        else {
            this.setState({
                password: {
                    isValid: false,
                    error: null
                }
            })
        }
    }

    onConfirmPassworChanged = (e) => {
        const confirmPassword = e.target.value;

        if (confirmPassword){
            if (this.state.password.value !== confirmPassword){
                this.setState({
                    confirmPassword: {
                        isValid: false,
                        error: 'Passwords do not match'
                    }
                })
            }
            else {
                this.setState({
                    confirmPassword: {
                        value: confirmPassword,
                        isValid: true,
                        error: null
                    }
                })
            }
        }
        else {
            this.setState({
                confirmPassword: {
                    isValid: false,
                    error: null
                }
            })
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 push-m3 m6 push-l3 l6">
                        <div className="card">
                            <div className="card-title center-align">
                                <span>Create an account.</span>
                                {this.state.viewError ? <div className="small-text danger">{this.state.viewError}</div> : null}
                            </div>
                            <div className="row">
                                <div className="col s10 offset-s1 m6 offset-m3 l6 offset-l3">
                                    <div className="input-field">
                                        <input id="user_name" type="text" onChange={this.onUserNameChanged} />
                                        <label htmlFor="user_name">UserName</label>
                                        {this.state.userName.error ? <span className="small-text danger">{this.state.userName.error}</span> : null }
                                    </div>
                                    <div className="input-field">
                                        <input id="email" type="text" onChange={this.onEmailChanged} />
                                        <label htmlFor="email">Email</label>
                                        {this.state.email.error ? <span className="small-text danger">{this.state.email.error}</span> : null }
                                    </div>
                                    <div className="input-field">
                                        <input id="password" type="password" onChange={this.onPasswordChanged} />
                                        <label htmlFor="password">Password</label>
                                        {this.state.password.error ? <span className="small-text danger">{this.state.password.error}</span> : null }
                                    </div>
                                    <div className="input-field">
                                        <input id="confirmPassword" type="password" onChange={this.onConfirmPassworChanged} />
                                        <label htmlFor="confirmPassword">Confirm password</label>
                                        {this.state.confirmPassword.error ? <span className="small-text danger">{this.state.confirmPassword.error}</span> : null }
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <div className="row">
                                    <button className="col s10 offset-s1 m4 offset-m4 l4 offset-l4 waves-effect btn"
                                        onClick={this.onSignup}>
                                        Signup
                                     </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        signupMessage: state.signup.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (userName, email, password, confirmPassword) => {
            dispatch(actions.signup(userName, email, password, confirmPassword));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);