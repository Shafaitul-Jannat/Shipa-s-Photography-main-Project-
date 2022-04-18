import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';


const Register = () => {

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }


    const handleRegister = async (event) => {
        event.preventDefault();
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
                    <input

                        className='w-50 mx-auto btn btn-primary mt-2'
                        type="submit"
                        value="Register" />
                </form>
                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;