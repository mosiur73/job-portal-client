import Lottie from 'lottie-react';
import registerAnimation from '../assets/lottie/register.json'
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import SocialLogin from './shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {singInuser}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()

    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value;
          const password=e.target.password.value;
          console.log(email,password)

          singInuser(email,password)
          .then(result =>{
            console.log(result)
            toast.success('Login Successful!');
        const redirectPath = location?.state?.from || '/';
        navigate(redirectPath);  
            
          })
          .catch(error =>{
            console.log(error)
            toast.error('Login Failed. Please check your credentials.');
            e.target.reset(); 
          })
    }
    return (
        <div>
               <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
     
     <Lottie animationData={registerAnimation}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl font-bold mx-auto mt-5">Login  now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <div className='divider'></div>
              <div className="form-control mt-6">
                <button className="btn btn-accent"><SocialLogin></SocialLogin></button>
              </div>
        </div>
      </form>
      <p className='p-4'>New user have an account <Link className='underline' to="/signup">Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;