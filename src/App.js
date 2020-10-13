import React, {useContext} from "react";
import {AuthContext} from './Context/AuthContext';
import Navigation from './Navbar';
import Routes from './Routes';

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  //testing console logs
  console.log(user);
  console.log(isAuthenticated);
  return(
    <div className="App">
      <Navigation />
      <Routes />     
    </div>
  );
}

export default App;