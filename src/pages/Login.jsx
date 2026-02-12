import axios from 'axios'
import React, { useState } from 'react'
import useUserStore from '../stores/userStore'
import { useNavigate } from 'react-router'

function Login() {

    const [formLogin,setFormLogin] = useState({
        username:"",
        password:""
    })
    const setUser = useUserStore((state)=>state.setUser)
    const setToken = useUserStore((state)=>state.setToken)
    const navigate = useNavigate()
    // console.log(formLogin)
    const hdlSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post("https://dummyjson.com/auth/login",formLogin)
        console.log(res.data)
        const {image,lastName,firstName,username,email,accessToken} = res.data
        setUser({image,lastName,firstName,username,email})
        setToken(accessToken)
        navigate("/profile")
    }
    const hdlChange = (e) => {
        const {name,value} = e.target
        setFormLogin((prv)=>({...prv,[name]:value}))
    }
  return (
    <div className='h-full flex items-center bg-gray-200 w-full justify-center flex-col'>
            <h1 className='p-4 font-bold'>Login</h1>
            <form className='flex flex-col text-2xl  p-6 bg-white rounded-md' onSubmit={hdlSubmit}>
                <label >Username :</label>
                <input className='border rounded-xl ' name='username' type="text" onChange={hdlChange}/>
                <br />
                <label >Password :</label>
                <input className='border rounded-xl' name='password' type="password" onChange={hdlChange} />
                <br />
                <button className='rounded-2xl text-xl bg-emerald-400'>Log in</button>
            </form>
        </div>
  )
}

export default Login