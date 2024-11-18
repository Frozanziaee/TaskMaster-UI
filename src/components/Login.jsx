
import { Link } from "react-router-dom"
import Button from "./Button"

export default function Login(){
    return (
        <div className="login sign-style">
            <h1 className="title">TaskMaster</h1>
            <div className="flex">
                <button className="google"><a href="#" className="link">Continue with Google</a></button>
                <button className="github"><a href="#" className="link">Continue with Github</a></button>
            </div>
            <span className="or">or</span>

            <form className="form-login flex">
                <input 
                    type="email"
                    className="input-email"
                    placeholder="ahmad@gmail.com"
                />

                <input 
                    type="password"
                    className="input-password"
                    placeholder="Password"
                />
                <Button className="signin">Sign in</Button>
            </form>

            <span className="not-mem">Not a member? <Link to ="/signup" className="account">Create an account.</Link></span>
        </div>
    )
}