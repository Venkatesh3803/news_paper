import React, { useContext, useState } from 'react'
import Navber from '../Components/Navber'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const [inputs, setInputs] = useState({})
    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(inputs)
    }
    return (
        <div>
            <Navber />
            <div className="min-h-[90vh] w-full py-10">
                <div className="w-[85%] min-h-[70vh] m-auto shadow-lg rounded-xl flex">
                    <div className="flex-1 py-[3rem] px-[6rem] flex flex-col gap-5">
                        <h1 className='text-[2rem] font-semibold'>Logo</h1>
                        <p className='text-gray-600'>Welcome Back, Please Login to your Account </p>
                        <form action="" className='flex gap-5 flex-col mt-[2rem]' onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='example@gmail.com' name='email' className='border-b border-gray-600 pb-2 focus:outline-none' required onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Password</label>
                                <input type="password" name='password' minLength={5} className='border-b border-gray-600 pb-2 focus:outline-none' onChange={handleChange} />
                            </div>
                            <button type='submit' className='bg-blue-950 text-white font-semibold text-lg py-[0.5rem] rounded-lg'>Login</button>
                        </form>
                    </div>
                    <div className="login flex-1 relative">
                        <h1 className='text-[2.8rem] font-semibold leading-[50px] text-center text-white'>Welcome to Login</h1>
                        <p className='text-[1.2rem] font-normal text-white leading-[20px] text-center'>Don't have Account.</p>
                        <Link to={"/register"}>
                            <button className='bg-transparent text-white border border-gray-50 px-[3rem] py-[0.5rem] rounded-full  font-semibold'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
