import React, { Component } from 'react';
import axios from 'axios';
import styles from './UserPage.module.css';
import Navigation from '../../Navbar';

export default class Profile extends Component {
    state = {
      userData: []
    }

  componentDidMount = () =>{
    this.getUserData();
  }

  getUserData() {
    axios.get('/users/5f702716f9748035a8af83ea')
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
      <div>
        <Navigation></Navigation>
        <div className={styles.registerBox}>
          <h3>Profile</h3>
        </div>
      </div>
    )
  }
}