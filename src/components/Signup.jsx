import { Link, Navigate, useNavigate } from 'react-router-dom'

import Button from './Button'
import { useState } from 'react'
import customFetch from '../axios'

export default function Signup(){
    const [errors, setErrors] = useState()
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        dateofbirth: '',
        country: ''
    })

    const navigate = useNavigate()

    const [isSignin , setIsSignin] = useState(false)
    const useEffect = (() => {
        const token = localStorage.getItem('token')
        if (token){
            setIsSignin(true)
        }
    }, [])

    if (isSignin){
        return <Navigate to="/" />
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const validateForm = () => {
        const newErros = {}
        const {email, password, firstname, lastname, dateofbirth, country} = formData

        if (!email) newErros.email = "email is required"
        else if (!/\S+@\S+/.test(email)) newErros.email = "Invalid email"
        if (!password) newErros.password = "password is required"
        else if (password.length < 6) newErros.password = "password must be at least 6 characters"
        if (!firstname) newErros.firstname = "Please enter your first name"
        if (!lastname) newErros.lastname = "Please enter your last name"
        if (dateofbirth) newErros.dateofbirth = "Date of Birth is required"
        if (!country) newErros.country = "Please enter your country"

        return newErros
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formErrors = validateForm()
     
        try {
            const {
                data: {token, user}
            } = await customFetch.post('/auth/signup', formData)

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/')
        } catch (error) {
            console.error(error)
            console.log(error.configs);
            console.log(error.response.data);

            if (Object.keys(formErrors).length === 0) {
                setSubmitted(true)
                console.log("form submitted successfully", formData)
            } else {
                setErrors(formErrors)
                setSubmitted(false)
            }
        }       
    }

    return (
        <div className="login">
            <h1 className="title">TaskMaster</h1>
            <div className='flex'>
            <button className="google"><a href="#" className="link">Continue with Google</a></button>
            <button className="github"><a href="#" className="link">Continue with Github</a></button>
            {submitted && <p style={{color: 'green'}}>Registration Successful</p>}
            <form className="flex" onSubmit={handleSubmit}>
                <div>
                <input 
                    type="email"
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className="input-email"
                    placeholder="name@gmail.com"
                />
                {/* {errors.email && <p style={{color: 'red'}}>{errors.email}</p>} */}
                </div>
                <div>
                <input 
                    type="password"
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className="input-password"
                    placeholder="Password"
                />
                {/* {errors.password && <p style={{color: 'red'}}>{errors.password}</p>} */}
                </div>
                <div>
                <input 
                    type="text"
                    id='firstname'
                    name='firstname'
                    value={formData.firstname}
                    onChange={handleChange}
                    className="input-firstname"
                    placeholder="First Name"
                />
                {/* {errors.firstname && <p style={{color: 'red'}}>{errors.firstname}</p>} */}
                </div>
                <div>
                <input 
                    type="text"
                    id='lastname'
                    name='lastname'
                    value={formData.lastname}
                    onChange={handleChange}
                    className="input-lastname"
                    placeholder="Last name"
                />
                {/* {errors.lastname && <p style={{color: 'red'}}>{errors.lastname}</p>} */}
                </div>
                <div>
                <input 
                    type="date"
                    id='date'
                    name='dateofbirth'
                    value={formData.dateofbirth}
                    onChange={handleChange}
                    className="input-date"
                    placeholder="Date of Birth"
                />
                {/* {errors.dateofbirth && <p style={{color: 'red'}}>{errors.dateofbirth}</p>} */}
                </div>
                <div>
                    <input 
                        type="text"
                        id='country'
                        name='country'
                        value={formData.country}
                        onChange={handleChange}
                        className="input-country"
                        placeholder="Country"
                    />
                    {/* {errors.country && <p style={{color: 'red'}}>{errors.country}</p>} */}
                </div>
                <Button className="signin" type="submit">Join us</Button>
            </form>

            <span className="not-mem">Already a member? <Link to="/signin" className="account">Sign in.</Link></span>
            </div> 
        </div> 

    )
}