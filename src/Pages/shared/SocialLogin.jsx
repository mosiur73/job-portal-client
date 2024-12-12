import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {

    const {googleLogin}=useContext(AuthContext)

    const handleGoogleLogin=()=>{
        googleLogin()
        .then(res=>{
        console.log(res)
        //   const redirectPath = location?.state?.from || '/';
        // navigate(redirectPath);
        })
        .catch((error) => {
          toast.error('Google Login Failed. Try again.',error);
        });
      }
    return (
        <div>
            <button onClick={handleGoogleLogin}  className='btn'><FaGoogle />Google</button>
        </div>
    );
};

export default SocialLogin;