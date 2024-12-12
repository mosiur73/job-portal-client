import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import { span } from 'motion/react-client';

const PrivateRoute = ({children}) => {
   const {user,loading}=useContext(AuthContext)
   const location =useLocation()
   console.log(location);
   

   if(loading){
    return <span className='loading loading-ring loading-lg'></span>
   }

    if(user){
        return children;
    }
    return <Navigate state={{from:location?.pathname}}  to="/login"></Navigate> 
    
};

export default PrivateRoute;