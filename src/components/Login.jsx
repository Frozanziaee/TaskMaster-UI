

import Button from "./Button"
import { useState, useContext, useEffect } from "react"
import { useNavigate, Navigate, Link } from "react-router-dom"
import {AuthContext} from "../context/AuthContext"
import { toast } from "react-toastify"

export default function Login(){
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const navigate = useNavigate();
    const {login } = useContext(AuthContext)

    // const validateForm = () => {
    //     const newErros = {}
    //     const {email, password} = formData

    //     if (!email) newErros.email = "email is required"
    //     if (!password) newErros.password = "password is required"

    //     return newErros
    // }

   
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            setIsLogin(true)
        }
    }, [])

    if (isLogin) {
        return <Navigate to="/" />
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        // const formErrors = validateForm()

        try {
            await login(formData)
            navigate('/')
        } catch (error) {
            console.error("Error", error)
            toast.error(error.message)

        }
    }

    return (
        <div className="login sign-style">
            <h1 className="title">TaskMaster</h1>
            <div className="flex">
                <button className="google"><a href="#" className="link">Continue with Google</a></button>
                <button className="github"><a href="#" className="link">Continue with Github</a></button>
            </div>
            <span className="or">or</span>

            <form className="form-login flex" onSubmit={handleSubmit}>
                <div>
                <input 
                    type="email"
                    className="input-email"
                    placeholder="ahmad@gmail.com"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                {/* {errors.email && <p style={{color: 'red'}}>{errors.email}</p>} */}
                </div>
                <div>
                <input 
                    type="password"
                    className="input-password"
                    placeholder="Password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                {/* {errors.password && <p style={{color: 'red'}}>{errors.password}</p>} */}
                </div>
                <Button className="signin" type="submit">Sign in</Button>
            </form>

            <span className="not-mem">Not a member? <Link to ="/signup" className="account">Create an account.</Link></span>
        </div>
    )
}