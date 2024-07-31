import React from 'react'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../config'


const Register = () => {
   
  // const baseUrl =  import.meta.env.VIT_BASE_URL

  const navigate = useNavigate()
  const handleRegister = async (data)=>{
   try {
    const response = await axios.post(baseUrl+'/register', data)
     
   if(response.status === 201){
   
    navigate('/login')
   }else{
    alert("Registeration failed")
   }
   } catch (error) {
    alert(error?.response?.data?.message)
   }
  }


  return (
  <Form type='Register' onSubmit={handleRegister} />
  )
}

export default Register