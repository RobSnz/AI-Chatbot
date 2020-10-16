import React, {useContext} from "react";
import {AuthContext} from './Context/AuthContext';
import Routes from './Routes';

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log(user);
  console.log(isAuthenticated);
  
  return(
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;