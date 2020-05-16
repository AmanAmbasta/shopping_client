import React, { Component } from 'react';
let url = 'http://localhost:5000/auth/signin'
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
            username: this.state.email,
            password: this.state.password,
            mobile: +this.state.mobile,
            gender: this.state.gender
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            alert("😇 😇 😇 New Profile is Created!!!😇 😇 😇 ")
        })
        
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
                        onChange={this.handleChange}
                        required />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email id"
                        value={this.state.email}
                        onChange={this.handleChange} 
                        required
                        />
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        required
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange} />Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        required
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange} />Female
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="create new password"
                        required
                        value={this.state.password}
                        onChange={this.handleChange} />
                    <br />
                    <input
                        type="number"
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