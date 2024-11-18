import { Link } from 'react-router-dom'
import Button from './Button'
import './ForgotPassword.css'

export default function ForgotPassword () {
    return (
        <div className='password flex'>
            <h2 className='title-password'>Forgot Password</h2>
            <form className='flex'>
                <input 
                    type="email"
                    className="input-email input-pas"
                    placeholder="name@gmail.com"
                />

                <Button className="signin">
                    Get a Reset Link
                </Button>
            </form>
            <span className="not-mem back">Back to <Link to="/signin" className="account">Sign in.</Link></span>
        </div>    
    ) 
}           
