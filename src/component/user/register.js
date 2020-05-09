import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            mobile: "",
            gender: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            mobile: this.state.mobile,
            gender: this.state.gender
        }
        console.log(data);
        alert("😇 😇 😇 New Profile is Created!!!😇 😇 😇 ")
        
    }
    render() {
        return (
            <div className="Register">
                <h2>Create New Profile</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email id"
                        value={this.state.email}
                        onChange={this.handleChange} />
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange} />Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange} />Female
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="create new password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    <br />
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Contact number"
                        value={this.state.mobile}
                        onChange={this.handleChange} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Register;