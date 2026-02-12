import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { registerValidator } from '../validator/register.validator'



function Register() {
    const [formData,setFormdata] = useState({
        username:"",
        password:"",
        email:"",
        phone:""
    })

    
    // console.log(formData)
    const navigate = useNavigate()
    const [error,setError] = useState({})
   
    const handleChange = (e) =>{
        const{name,value} = e.target
        setFormdata((prv)=>({...prv,[name]:value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(result.error.flatten())
        setError({})
        const result = registerValidator.safeParse(formData)
        if(!result.success) {
            const{fieldErrors} = result.error.flatten()
            setError(fieldErrors)
            return
        }
        // console.log(fieldErrors)
        try {
            const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`,formData)
            console.log("Register successfully",res.data);
            toast.success("ลงทะเบียนสำเร็จแล้ว")
            navigate('/post')
        } catch(error){
        };
    }
    console.log('error', error)
    return (
        <div className='h-full flex items-center bg-gray-200 w-full justify-center flex-col'>
            <h1 className='p-4 font-bold'>Create Account</h1>
            <form className='flex flex-col text-2xl  p-6 bg-white rounded-md' onSubmit={handleSubmit}>
                <label >Username :</label>
                <input className='border rounded-xl ' name='username' type="text" onChange={handleChange} />
                {error?.username && <p className='text-red-600'>{error?.username[0]}</p> }
                <br />
                <label >Password :</label>
                <input className='border rounded-xl' name='password' type="password" onChange={handleChange} />
                {error?.password && <p className='text-red-600'>{error?.password[0]}</p> }
                <br />
                <label >Email :</label>
                <input className='border rounded-xl' name='email' type="text" onChange={handleChange} />
                {error?.email && <p className='text-red-600'>{error?.email[0]}</p> }
                <br />
                <label >Phone :</label>
                <input className='border rounded-xl ' name='phone' type="number" onChange={handleChange} />
                {error?.phone && <p className='text-red-600'>{error?.phone[0]}</p> }
                <br />
                <button className='rounded-2xl text-xl bg-emerald-400'>Sign up</button>
            </form>
        </div>
    )
}

export default Register