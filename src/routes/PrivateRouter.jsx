import React, { children, useContext } from 'react';
import { AuthCotext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthCotext);
    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }
    if(user){
        return children;
    }
    
    return <Navigate to='/login'></Navigate>
    
};

export default PrivateRouter;