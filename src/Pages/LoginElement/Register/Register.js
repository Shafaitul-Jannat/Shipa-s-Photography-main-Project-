import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <div className='register-form mt-5'>
                <h2 className='text-center text-primary' >Please Register</h2>
                <form className='mt-5' onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Email Address' required />

                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input type="checkbox" name="terms" id="terms" />

                    <label htmlFor="terms">Agree with Terms and Conditions</label>
                    <input className='w-50 mx-auto btn btn-primary mt-2'
                        type="submit"
                        value="Register" />
                </form>
                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;