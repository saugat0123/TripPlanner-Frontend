import { Component } from "react";
import axios from 'axios';
// import { useHistory, Redirect } from 'react-router-dom'

const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    fnameError: "",
    lnameError: "",
    addressError: "",
    phoneError: "",
    emailError: "",
    passwordError: ""
};

class Register extends Component {

    state = initialState

    changeHandle = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
    }

    validate = () => {
        let fnameError = "";
        let lnameError = "";
        let emailError = "";
        let addressError = "";
        let phoneError = "";
        let passwordError = "";

        if (!this.state.firstName) {
            fnameError = "First name cannot be blank";
        }

        if (!this.state.password) {
            passwordError = "Password cannot be blank";
        }

        if (!this.state.lastName) {
            lnameError = "Last name cannot be blank";
        }

        if (!this.state.address) {
            addressError = "Address cannot be blank";
        }

        if (!this.state.phone) {
            phoneError = "Phone cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "Invalid email address";
        }

        if (emailError || fnameError || lnameError || addressError || phoneError || passwordError) {
            this.setState({ emailError, fnameError, lnameError, phoneError, addressError, passwordError });
            return false;
        }

        return true;
    };

    submitUser = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            axios.post('http://localhost:3000/register', this.state)
                .then((response) => {
                    console.log(response)
                    alert("User Registered!! Redirecting to Login Page!!")
                    window.location.assign('/login')
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }

    }

    render() {

        return (
            <div id="signup-form-div">
                <form className="col-sm-6 offset-sm-3 mx-20" id="signup">
                    <div class="labelSignup">
                        <h3>Signup and get started with us today! </h3>
                    </div>

                    <div class="mb-2" id="signup-fname">
                        <label for="fname" class="form-label">First Name</label>
                        <input type="text" placeholder="Enter first name" class="form-control" id="fname" name="firstName" value={this.state.firstName} onChange={this.changeHandle} />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.fnameError}
                        </div>
                    </div>

                    <div class="mb-2">
                        <label for="lname" class="form-label">Last Name</label>
                        <input type="text" placeholder="Enter last name" class="form-control" id="lname" name="lastName" value={this.state.lastName} onChange={this.changeHandle} />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.lnameError}
                        </div>
                    </div>

                    <div class="mb-2">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" placeholder="Enter email" class="form-control" id="email" name="email" value={this.state.email} onChange={this.changeHandle} />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
                        </div>
                    </div>

                    <div class="mb-2">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" placeholder="Enter password" class="form-control" id="password" name="password" value={this.state.password} onChange={this.changeHandle} />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
                        </div>
                    </div>

                    <div class="mb-2">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" placeholder="Enter address" class="form-control" id="address" name="address" value={this.state.address} onChange={this.changeHandle} />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.addressError}
                        </div>
                    </div>
                    <div class="mb-2">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="text" placeholder="Enter phone" class="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.changeHandle} />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.phoneError}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={this.submitUser} id="signup-btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default Register;