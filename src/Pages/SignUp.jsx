import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import registerAnimation from '../assets/lottie/register.json'
import AuthContext from '../context/AuthContext/AuthContext';
import SocialLogin from './shared/SocialLogin';
import { Link } from 'react-router-dom';

const SignUp = () => {
      const {createUser}=useContext(AuthContext)
      
    const handleRegister=e=>{
        e.preventDefault()
        const email=e.target.email.value;
          const password=e.target.password.value;
          console.log(email,password)

           createUser(email,password)
           .then(result =>{
            console.log(result)
           })
           .catch(error =>{
            console.log(error)
           })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
           
           <Lottie animationData={registerAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold mx-auto mt-5">Register  now!</h1>
            <form onSubmit={handleRegister} className="card-body">
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
                <button className="btn btn-primary">Register</button>
              </div>
              <div className='divider'></div>
              <div className="form-control mt-6">
                <button className="btn btn-accent"><SocialLogin></SocialLogin></button>
              </div>
              
            </form>
            <p className='p-4'>already have an account <Link className='underline' to="/login">login</Link></p>
           
            
          </div>
        </div>
      </div>
    );
};

export default SignUp;