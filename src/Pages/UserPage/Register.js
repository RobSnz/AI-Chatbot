import React, { Component } from 'react';
import axios from 'axios';
import styles from './UserPage.module.css';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    this.onChangeUsername = this.handleFormEvent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      name: '',
      password: '',
      email:''
    }
  }

  handleSuccessfulAuth(data){
    console.log("function triggered redirect")
    this.props.handleLogin(data)
    this.props.history.push("/About");
  }

  handleFormEvent(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  onSubmit(e) {
    e.preventDefault();
  
    const user = {
      username: this.state.username,
      name: this.state.name, 
      password: this.state.password,
      email: this.state.email      
    };
  
    console.log(user);
    
    axios.post('http://localhost:5000/users/register', user)
      .then(res => {
        console.log(res.data)
        if(res.data.error === "user already exists"){
          console.log("user already exists");  
        }
        else if(res.data.error === "error"){
          console.log("error occured");
        }
        else{
          this.handleSuccessfulAuth(res.data)
        }
      })

    this.setState({
      username: '',
      name: '',
      password: '',
      email:''
    })
  }

  render() {
    return (
      <div className={styles.registerBox}>
        <h3>Register</h3>
        <form className={styles.registerForm} onSubmit={this.onSubmit}>
          <div>
            <label> Username: </label>
            <input name="username" type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <label> Name: </label>
            <input name="name" type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeUsername}
            />              
            <label> Password: </label>
            <input name="password" type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangeUsername}
            />              
            <label> Email: </label>
            <input name="email" type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className={styles.registerButton}>
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>                    
        </form>
      </div>
    )
  }
}