import React, { Component } from 'react';
import axios from 'axios';
import styles from './UserPage.module.css';

export default class Profile extends Component {
    state = {
      userData: []
    }

  componentDidMount = () =>{
    this.getUserData();
  }

  getUserData() {
    axios.get('http://localhost:5000/users/5f702716f9748035a8af83ea')
      .then(response => {
        const data = response.data
        console.log(data)
        this.setState({ userData: response.data})
        console.log(this.state.userData)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className={styles.registerBox}>
        <h3>Profile</h3>
        <div><h5>Name: </h5>{this.state.userData.name}</div>
        <div><h5>User name: </h5>{this.state.userData.username}</div>
        <div><h5>Email: </h5>{this.state.userData.email}</div>
      </div>
    )
  }
}