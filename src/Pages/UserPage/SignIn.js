 import React, { Component } from 'react';
 import axios from 'axios';
 import styles from './UserPage.module.css';
 

 export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    this.onChange = this.handleFormEvent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      responsemsg:''
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
  
    const loginDetail = {
      email: this.state.email,    
      password: this.state.password
    };
  
    console.log(loginDetail);
    
    axios.post('http://localhost:5000/users/login', loginDetail)
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
      });

    this.setState({
      email: '',
      password: '',
    })
  }

   render() {
    return (
      <div className={styles.registerBox}>
        <h3>Welcome</h3>
        <h5>Log in to continue</h5>
        <form className={styles.registerForm} onSubmit={this.onSubmit}>
           <div>
             <label> Email: </label>
             <input  name="email" type="text"
               required
               className="form-control"
               value={this.state.email}
               onChange={this.onChange}
             />             
             <label> Password: </label>
             <input  name="password" type="text"
               required
               className="form-control"
               value={this.state.password}
               onChange={this.onChange}
             />              
           </div>
           <div className={styles.registerButton}>
             <input type="submit" value="Sign in" className="btn btn-primary" />
           </div>                    
        </form>
      </div>
    )
  }
}