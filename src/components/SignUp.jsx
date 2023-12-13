import React from 'react';
import loginImage from './image/sign.svg';
const SignUp = () => {
    return (
        <div className='signComponents'>
            <img src={loginImage} alt='login-image' />
            <form>
                <input type='text' placeholder='Full Name' />
                <input type="email" placeholder='your email' />
                <input type="password" name="" id="" placeholder='create password' />
                <input type="password" name="" id="" placeholder='confirm password' />
                <input type="checkbox"  id="terms" />
                <label htmlFor="terms">Terms and Conditions</label>
                <input type="submit" value="Create an account" />
            </form>
        </div>
    );
}

export default SignUp;
