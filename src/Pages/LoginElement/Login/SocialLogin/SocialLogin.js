import React from 'react';

import google from '../../../../images/Social/google.png';

import facebook from '../../../../images/Social/facebook.png';
import github from '../../../../images/Social/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {/* {errorElement} */}
            <div className=''>
                <button
                    // onClick={() => signInWithGoogle()}
                    className='btn btn-secondary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '40px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-secondary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '20px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    // onClick={() => signInWithGithub()}
                    className='btn btn-secondary w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;