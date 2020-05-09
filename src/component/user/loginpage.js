import React, { Component } from 'react';
import "./login.css";

const auth = 'http://localhost:5000/auth/user';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            username: this.state.user,
            password: this.state.password
        }
        if (data.username === "" || data.password === "") {
            alert("Hey Complet the Form Please 🤯 🤯 🤯");

        }
        else {
            fetch(auth, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
                .then(data => console.log(data))
                .catch(alert("OPPS ☹ ☹ ☹ Something went Wrong😱 😱 😱  "));
        }
    }


    render() {
        return (
            <div className="login">
                <form className="box" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        name="user"
                        placeholder="Username"
                        value={this.state.user}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <input type="submit" value="Login" />
                    <label >Can't able to login? <a href="/">Forget Password</a></label><br />
                    <label >New User? <a href="/">Register</a> </label>
                </form>
            </div>
        )
    }
}

export default Login;