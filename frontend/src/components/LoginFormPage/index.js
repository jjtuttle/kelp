import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import profile from '../../images/profile-png.png';
import email from '../../images/email-png.png';
import pass from '../../images/pass-png.png';

// import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }



    return (
        <div className='container'>
            <div className='sub-container'>
                <div>
                    <div className='img'>
                        <div className='img-container'>
                            {/* <img src={profile} alt='profile' className='profile' /> */}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='login-form' >
                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                        <div >
                            <h2>Login</h2>
                            <div>
                                {/* <img src={email} alt='email' className='email' /> */}
                                <input className='name'
                                    type='text'
                                    value={credential}
                                    onChange={(e) => setCredential(e.target.value)}
                                    required
                                    placeholder='Username or Email'
                                />
                            </div>
                            <div>
                                {/* <img src={pass} alt='password' className='password' /> */}
                                <input className='pass'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder='Password'
                                />
                            </div>
                        </div>
                        <div className='login-btn'>
                        <button type='submit' className='button'>Log In</button>
                        </div>
                    </form>
                </div >
            </div>
        </div>
    );
};


export default LoginFormPage;