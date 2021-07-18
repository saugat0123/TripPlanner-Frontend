  import React, { Component } from "react";
  import axios from 'axios';
  import { Redirect } from 'react-router-dom';
  import { ToastContainer,toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'

  const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
};

  class Login extends Component {
    state = initialState;

    changeHandle = (event) => {
      const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
    }

    validate = () => {
      let emailError = "";
      let passwordError = "";

      if (!this.state.password) {
          passwordError = "Password cannot be blank";
      }

      if (!this.state.email.includes("@")) {
          emailError = "Invalid email address";
      }

      if (emailError || passwordError) {
          this.setState({ emailError, passwordError});
          return false;
      }

      return true;
  };

    submitUser = (e) => {
      e.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        axios.post('http://localhost:3000/login', this.state)
        .then((response) => {
          toast('Login Successful!')
          console.log(response)
          this.setState({
            loginCheck: true
          })
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('userType', response.data.data.userType)
          localStorage.setItem('_id', response.data.data._id)
          localStorage.setItem('firstName', response.data.data.firstName)
          
          window.location.href='/'
        })

        .catch((err) => {
          console.log(err.response)
        })
      }
    }
    render() {
      if (this.state.loginCheck === true) {
        return <Redirect to='/' />
      }
      if (localStorage.getItem('token')) {
        return <Redirect to='/' />
      }
      return (
        <div>
          <form className="col-sm-5 offset-sm-3">
            <h3>Welcome!!</h3>

            <div class="mb-2" id="login-email">
              <label for="email" class="form-label">Email</label>
              <input type="text" class="form-control" id="email" placeholder = "Enter email" name="email" value={this.state.email} onChange={this.changeHandle} />
              <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
                        </div>
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password"  placeholder = "Enter password" name="password" value={this.state.password} onChange={this.changeHandle} />
              <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
                        </div>
            </div>

            <div className="form-group" class="mb-3">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={this.submitUser} id="login-btn">Submit</button>
            <p className="forgot-password text-right" id="forgot-password">
              Forgot <a href="#">password?</a>
            </p>
          </form>
          <ToastContainer/>
        </div>

      )
    }
  }

  export default Login;