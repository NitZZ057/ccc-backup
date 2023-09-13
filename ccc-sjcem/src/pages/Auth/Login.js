import React, { useState, useRef } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import '../../css/login.css'
import { useAuth } from '../../context/auth';
import axios from 'axios';
import Layout from "../../components/Layout";

const Login = () => {
  const navigate = useNavigate();
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [auth, setAuth] = useAuth();
  const [error, setError] = useState('');
  const processing = useRef(null);




  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      processing.current.style.display = 'flex';
      const res = await axios.post('/api/v1/auth/sign-in', { email: email1, password: password1 });
      processing.current.style.display = 'none';
      if (res && res.data.success) {

        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate('/');
      } else {
        setError(res.data.message)
      }
    } catch (error) {
      console.log(error)
      setError(error.message)

    }
  }


  return (
    <Layout>
      <div className='login-page'>
        <div className='login-container'>
          <div className='login-header'>
            <div className="error-div">{error ? error : ''}</div>
            <div ref={processing} className="" style={{display:"none"}}>Processing...</div>
            <div className="sign-in-div">
              <div className='sign-in'>Login</div>
              <form className='form-group sign-form' onSubmit={handleSignIn}>

                <input
                  type='email'
                  name='email'
                  className=''
                  value={email1}
                  onChange={(e) => setEmail1(e.target.value)}
                  required
                  placeholder='Email' />
                <input
                  type='password'
                  name='password'
                  className=''
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  required
                  placeholder='password' />
                <button type='submit' className='btn btn-primary btn-small'>Sign In</button>

                <div className="sign-up-link">
                  Don't have an account? <NavLink to="/protected/signup">Sign Up</NavLink>
                </div>
                <div className="sign-up-link">
                  <NavLink to="/protected/forgot-password">Forgot Password</NavLink>
                </div>
              </form>
            </div>


          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login