import React, { useState, useRef } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import Layout from '../../components/Layout';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState('');
    const processing = useRef(null);


    const emailRegex = /^[a-zA-Z0-9._-]+@sjcem\.edu\.in$/;

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            if (!email.match(emailRegex)) {
                setError('Please use email ID provided by St. John College of Engineering and Management.')
                return;
            }


            if(password.length<8){
                setError('Password must be of atleast 8 characters')
                return
            }

            processing.current.style.display = 'flex';
            const res = await axios.post('/api/v1/auth/sign-up', { name, email, password });
            processing.current.style.display = 'none';

            if (res && res.data.success) {
                navigate('/protected/login');
            }else{
                setError(res.data.message)
            }
            
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }
    return (

        <Layout>
            <div className="sign-up-container">
                <div className="error-div">{
                error?error:''
                }</div>
                <div ref={processing} className="" style={{display:"none"}}>Processing...</div>
                <div className="sign-up-div">
                    <div className='sign-up'>Sign Up</div>
                    <form className='sign-form' onSubmit={handleSignUp}>

                        <input
                            type='name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder='Name' />
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='Email' />
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='password' />
                        <button type='submit' className='btn btn-primary'>Sign Up</button>
                    </form>
                    <div className="sign-up-link">
                        Alredy have an account? <NavLink to="/protected/login">Sign In</NavLink>
                    </div>
                </div>
            </div>
        </Layout>



    )
}

export default Signup