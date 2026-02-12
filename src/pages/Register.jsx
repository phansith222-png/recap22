import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'



function Register() {
    const [formData,setFormdata] = useState({
        username:"",
        password:"",
        email:"",
        phone:""
    })

    
    // console.log(formData)
    const navigate = useNavigate()
    const [submitted,setSubmitted] = useState([])
    const handleChange = (e) =>{
        const{name,value} = e.target
        setFormdata((prv)=>({...prv,[name]:value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`,formData)
            console.log("Register successfully",res.data);
            toast.success("ลงทะเบียนสำเร็จแล้ว")
            navigate('/post')
        } catch(error){
        };
    }
    return (
        <div className='h-full flex items-center bg-gray-200 w-full justify-center flex-col'>
            <h1 className='p-4 font-bold'>Create Account</h1>
            <form className='flex flex-col text-2xl  p-6 bg-white rounded-md' onSubmit={handleSubmit}>
                <label >Username :</label>
                <input className='border rounded-xl ' name='username' type="text" onChange={handleChange} /><br />
                <label >Password :</label>
                <input className='border rounded-xl' name='password' type="password" onChange={handleChange} /><br />
                <label >Email :</label>
                <input className='border rounded-xl' name='email' type="email" onChange={handleChange} /><br />
                <label >Phone :</label>
                <input className='border rounded-xl ' name='phone' type="number" onChange={handleChange} /><br />
                <button className='rounded-2xl text-xl bg-emerald-400'>Sign up</button>
            </form>
        </div>
    )
}

export default Register