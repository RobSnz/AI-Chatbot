import React, {useState, useRef, useContext, useEffect} from 'react';
import AuthService from '../../Services/AuthService';
import Message from '../../components/Message';
import styles from './UserPage.module.css';
import { set } from 'js-cookie';
import Navigation from '../../Navbar';

const Register = props => {
  const[user,setUser] = useState({username: "", email:"", name:"", password: "", organization:""});
  const[message,setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(()=>{
    return ()=>{
      clearTimeout(timerID);
    }
  },[])

  const onChange = e =>{
    setUser({...user,[e.target.name] : e.target.value});
  }

  const resetForm = ()=>{
    set({username: "", email:"", name:"", password: "", organization: ""});
  }

  const onSubmit = e =>{
    e.preventDefault();
    AuthService.register(user).then(data=>{
      const {message} = data;
      setMessage(message);
      resetForm();
      if(!message.msgError){
        timerID = setTimeout(()=>{
          props.history.push('/login');
        }, 2000)
      }
    });
  }

  return(
    <div>
      <Navigation></Navigation>
      <div className={styles.usePagesBox}>
        <h3>Welcome</h3>
        <h5>Register</h5>
        <form className={styles.usePagesForm} onSubmit={onSubmit}>
          <div>
            <label> User name: </label>
            <input  name="username" type="username"
              value={user.username}
              required
              className="form-control"
              onChange={onChange}
            /> 
            <label> Email: </label>
            <input  name="email" type="email"
              value={user.email}
              required
              className="form-control"
              onChange={onChange}
            />  
            <label> Name: </label>
            <input  name="name" type="name"
              value={user.name}
              required
              className="form-control"
              onChange={onChange}
            />  
            <label> Organization: </label>
            <input  name="organization" type="organization"
              value={user.organization}
              required
              className="form-control"
              onChange={onChange}
            />              
            <label> Password: </label>
            <input  name="password" type="password"
              value={user.password}
              required
              className="form-control"
              onChange={onChange}
            />               
          </div>
          <div className={styles.usePagesButton}>
            <button type="submit" className="btn btn-primary">Register</button> 
          </div>                    
        </form>
        {message ? <Message message={message}/> : null}
      </div>
    </div>
  )
}

export default Register;