
import Button from "./Button"

export default function Login(){
    return (
        <div className="login inter">
            <h1 className="title">TaskMaster</h1>
            <button className="google"><a href="#" className="link">Continue with Google</a></button>
            <button className="github"><a href="#" className="link">Continue with Github</a></button>
            <span className="or">or</span>

            <form className="form-login">
                <input 
                    type="email"
                    className="input-email"
                    placeholder="ahmad@gmail.com"
                />

                <input 
                    type="password"
                    className="input-password"
                />
                <Button className="signin">Sign in</Button>
            </form>

            <span className="not-mem">Not a member? <a href="#" className="account">Create an account.</a></span>
        </div>
    )
}