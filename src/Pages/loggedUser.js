import React, {useContext} from "react";
import {AuthContext} from '../Context/AuthContext';

const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
function LoggedUser() {
    return user.username;
}

export default LoggedUser;