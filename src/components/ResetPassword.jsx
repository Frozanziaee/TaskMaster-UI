import Button from './Button'

export default function ResetPassword () {
    return (
        <div>
            <h2 className='title'>Forgot Password</h2>
            <form>
                <input 
                    type="email"
                    className="input-email"
                    placeholder="name@gmail.com"
                />

                <Button className="signin">
                    Get a Reset Link
                </Button>
            </form>

            <h3 className='title'>Password Reset Link Sent!</h3>
            <p className='reset-link'>A password reset link has been sent to Na***@gmail.com</p>
            <span className="not-mem">Back to <a href="#" className="account">Sign in.</a></span>
        </div>
    )
}