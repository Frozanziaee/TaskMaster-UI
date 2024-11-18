import { Link } from 'react-router-dom'
import Button from './Button'

export default function Signup(){
    return (
        <div className="login">
            <h1 className="title">TaskMaster</h1>
            <div className='flex'>
            <button className="google"><a href="#" className="link">Continue with Google</a></button>
            <button className="github"><a href="#" className="link">Continue with Github</a></button>
            <form className="flex">
                <input 
                    type="email"
                    className="input-email"
                    placeholder="name@gmail.com"
                />
                <input 
                    type="password"
                    className="input-password"
                    placeholder="Password"
                />
                <input 
                    type="text"
                    className="input-firstname"
                    placeholder="First Name"
                />
                <input 
                    type="text"
                    className="input-lastname"
                    placeholder="Last name"
                />
                <input 
                    type="date"
                    className="input-date"
                    placeholder="Date of Birth"
                />
                <input 
                    type="text"
                    className="input-country"
                    placeholder="Country"
                />
                <Button className="signin">Join us</Button>
            </form>

            <span className="not-mem">Already a member? <Link to="/signin" className="account">Sign in.</Link></span>
            </div> 
        </div> 

    )
}