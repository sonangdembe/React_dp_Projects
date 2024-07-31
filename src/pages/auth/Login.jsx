import React from "react";
import Form from "./components/form/Form";
import { baseUrl } from "../../config";

  const Login=()=>{
  //  const baseUrl =  import.meta.env.VIT_BASE_URL
const navigate = useNavigate()
const handleLogin = async (data)=>{
 try {
  // const response = await axios.post(`${baseUrl}/login`, data)
  const response = await axios.post( baseUrl+'/login', data)
 if(response.status === 200){
 
  navigate('/')
 }else{
  alert("Login failed")
 }
 } catch (error) {
  alert(error?.response?.data?.message)
 }



return (
<Form type='Login' onSubmit={handleLogin} />
)
}

  }
export default Login;
