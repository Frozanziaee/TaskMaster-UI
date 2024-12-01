import { Link } from 'react-router-dom'
import Button from './Button'
import './ForgotPassword.css'

export default function ForgotPassword () {
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          setIsLogin(true);
        }
      }, []);
    
      if (isLogin) {
        return <Navigate to="/" />;
    }

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

     // Submit handler function
    const handleSubmit = async (e) => {
        e.preventDefault(); 
    try {
        const response = await customFetch.post('/auth/forgot-password', email)
        setIsSent(true)
        const result = await response.json();
        if (response.ok) {
            setMessage("Check your email for a password reset link.");
          } else {
            setMessage(result.error || "An error occurred.");
          }
    } catch (error) {
          setMessage("Unable to send reset link. Try again later.");
    }


    }

    return (
        <div className='password flex'>
            <div className="password flex">
                {isSent ? (
                       <>
                        <h3 className='title-password'>Password Reset Link Sent!</h3>
                        <p className='reset-link'>
                            A password reset link has been sent to &nbsp;
                            {email}
                        </p>
                       </> 
                    ): (
                        <form className='flex' onSubmit={handleSubmit}>
                            <h2 className='title-password'>Forgot Password</h2>
                            <input 
                                type="email"
                                className="input-email input-pas"
                                placeholder="name@gmail.com"
                                value={email}
                                onChange={handleInputChange}
                                required
                            />
            
                            <Button className="signin">
                                Get a Reset Link
                            </Button>
                    </form> 
                    )  
                }
            </div>
            {message && <p>{message}</p>}
            <span className="not-mem back">Back to <Link to="/signin" className="account">Sign in.</Link></span>
        </div>    
    ) 
}           
