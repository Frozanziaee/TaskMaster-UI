import Button from './Button'
import './ForgotPassword.css'

export default function CreateNewPassword (){
    return (
        <div className='password'>
            <h2 className='title-password'>Create a New Password</h2>
            <form className='flex'>
            <   input 
                    type="password"
                    className="input-pas"
                    placeholder="Password"
                />
                <input 
                    type="password"
                    className="input-pas"
                    placeholder="Confirm Password"
                />

                <Button className="signin ">
                    Save & Continue
                </Button>
            </form>
        </div>
    )
}