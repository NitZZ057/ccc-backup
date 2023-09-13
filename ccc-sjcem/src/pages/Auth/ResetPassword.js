import React,{useState,useRef} from 'react'
import Layout from "../../components/Layout";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const {id} = useParams();
    const [password1, setPassword1] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const processing = useRef(null);
    
    const handleChangePass = async (e) => {
        e.preventDefault();
        try {
            if(password1 != confirmPassword){
                setError('Password does not match')
                return;
            }

            if(password1.length<8){
              setError('Password must be of atleast 8 characters')
              return
            }

            processing.current.style.display = 'flex';
            const res = await axios.post('/api/v1/auth/reset-password', { password: password1, id });
            processing.current.style.display = 'none';
            if (res && res.data.success) {
                alert('Password changed successfully')
                navigate('/protected/login');
            }

        } catch (error) {
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
              <div className=' reset-pass'>Change Password</div>
              <form className='form-group sign-form' onSubmit={handleChangePass}>

              <input
                  type='password'
                  name='password'
                  className=''
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  required
                  placeholder='password' />
                <input
                  type='password'
                  name='password'
                  className=''
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder='confirm password' />
                <button type='submit' className='btn btn-primary btn-small'>Change Password</button>
              </form>
            </div>


          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResetPassword