import { Link } from "react-router-dom";


export default function ResetPassword () {
    return (
        <div className="password flex"> 
            <h3 className='title-password'>Password Reset Link Sent!</h3>
            <p className='reset-link'>A password reset link has been sent to Na***@gmail.com</p>
            <span className="not-mem">Back to <Link to="/signin" className="account">Sign in.</Link></span>
        </div>
    )
}