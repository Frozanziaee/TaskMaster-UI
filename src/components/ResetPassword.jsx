import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import customFetch from "../axios";
import Button from './Button'
import './ForgotPassword.css'


export default function ResetPassword () {
  const [URLSearchParams] = useSearchParams
  const token = URLSearchParams.get("token");
  const user = URLSearchParams.get("user");
  const [isLogin, setIsLogin] = useState(false)
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  })


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  if (isLogin) {
    return <Navigate to="/" />;
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
}

 // Submit handler function
 async function handleSubmit (e) {
    e.preventDefault()

    try {
      const { data } = await customFetch.post(
        `/auth/reset-password?token=${token}&user=${user}`,
        formData
      );
      reset();
      toast.success(data.message);
    } catch (error) {
      console.error(error);
      toast.error(
        error.response.data.message ||
          "Something went wrong, please try again later!"
      );
    }
  }

  return (
    <div className='password'>
        <h2 className='title-password'>Create a New Password</h2>
        <form className='flex' onSubmit={handleSubmit}>
          <input 
                type="password"
                className="input-pas"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <input 
                type="password"
                className="input-pas"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
            />

            <Button className="signin " type="submit">
                Save & Continue
            </Button>
        </form>
 </div>
    )
}