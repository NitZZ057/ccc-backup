import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import '../../css/login.css'
import axios from 'axios';
import Layout from "../../components/Layout";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email1, setEmail1] = useState("");
  const [otp, setOtp] = useState("");
  const [otpv, setOtpv] = useState("");
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState('');
  const [id, setId] = useState('');
  const emailDiv = useRef(null);
  const otpDiv = useRef(null);
  const processing = useRef(null);



  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      processing.current.style.display = 'flex';
      const res = await axios.post('/api/v1/auth/forgot-password', { email: email1 });
      processing.current.style.display = 'none';
      if (res && res.data.success) {
        setOtpv(res.data.otp)
        setId(res.data.id)
        setTimer(60)
        emailDiv.current.style.display = 'none';
        otpDiv.current.style.display = 'flex';
        // navigate('/');
      } else {
        setError(res.data.message)
      }

    } catch (error) {
      processing.current.style.display = 'none';
      console.log(error)
      setError(error.message)

    }
  }

  const verifyOtp = async (e) => {
    e.preventDefault();

    try {
      if(otpv != otp){
        setError('Invalid OTP')
        return;
      }
      emailDiv.current.style.display = 'none';
      otpDiv.current.style.display = 'flex';
      navigate(`/protected/reset-password/${id}`);
      // startTimer();
    } catch (error) {

    }
  }



  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevValue) => --prevValue);
    }, 1000);

    timer === 0 && clearInterval(interval)
      if(timer === 0){
        emailDiv.current.style.display = 'flex';
        otpDiv.current.style.display = 'none';
      }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <Layout>
      <div className='login-page'>
        <div className='login-container'>
          <div className='login-header'>
            <div className="error-div">{error ? error : ''}</div>
            <div ref={processing} className="" style={{display:"none"}}>Processing...</div>
            <div ref={emailDiv} className="sign-in-div">
              <div className='sign-in'>Send OTP</div>
              <form className='form-group sign-form' onSubmit={handleSignIn}>

                <input
                  type='email'
                  name='email'
                  className=''
                  value={email1}
                  onChange={(e) => setEmail1(e.target.value)}
                  required
                  placeholder='Email' />

                <button type='submit' className='btn btn-primary btn-small'>Send OTP</button>
              </form>
            </div>

            
            <div ref={otpDiv} className="sign-in-div" style={{ display: "none" }}>
              <div className='sign-in'>Verify OTP</div>
              <div className="display-timer">OTP expires in {timer} sec</div>
              <form className='form-group sign-form' onSubmit={verifyOtp}>

                <input
                  type='text'
                  name='otp'
                  className=''
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  placeholder='Enter OTP' />

                <button type='submit' className='btn btn-primary btn-small'>Verify OTP</button>
              </form>
            </div>


          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ForgotPassword