import React, {useState, useContext} from 'react';
import AuthService from '../../Services/AuthService';
import {AuthContext} from '../../Context/AuthContext';
import Message from '../../components/Message';
import styles from './UserPage.module.css'; 
import Navigation from '../../Navbar';

const Login = props=>{
  const[user,setUser] = useState({username: "", password: ""});
  const[message,setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = e =>{
    setUser({...user,[e.target.name] : e.target.value});
  }

  const onSubmit = e =>{
    console.log("submit button reee");
    e.preventDefault();
    AuthService.login(user).then(data=>{
      const {isAuthenticated,user,message} = data;
      if(isAuthenticated){
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push('/Selection');
      }
      else
        setMessage(message);
    })
  }

  return(
    <div>
      <Navigation></Navigation>
      <div className={styles.usePagesBox}>
        <h3>Welcome</h3>
        <h5>Log in to continue</h5>
        <form className={styles.usePagesForm} onSubmit={onSubmit}>
          <div>
            <label> User name: </label>
            <input  name="username" type="username"
              required
              className="form-control"
              onChange={onChange}
            />             
            <label> Password: </label>
            <input  name="password" type="password"
              required
              className="form-control"
              onChange={onChange}
            />              
          </div>
          <div className={styles.usePagesButton}>
            <button type="submit" className="btn btn-primary">Login</button>
          </div>                    
        </form>
        {message ? <Message message={message}/> : null}
      </div>
    </div>
  )
}

export default Login;
