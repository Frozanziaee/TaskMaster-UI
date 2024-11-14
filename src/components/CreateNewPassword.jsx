import Button from './Button'

export default function CreateNewPassword (){
    return (
        <div>
            <h2 className='title'>Create a New Password</h2>
            <form>
            <   input 
                    type="password"
                    className="input-password"
                    placeholder="Password"
                />
                <input 
                    type="password"
                    className="input-pas"
                    placeholder="Confirm Password"
                />

                <Button className="signin">
                    Save & Continue
                </Button>
            </form>
        </div>
    )
}