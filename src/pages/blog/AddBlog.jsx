import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { baseUrl } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {

 const  navigate = useNavigate()
  const handleCreateBlog = async(data)=>{
    try{
    //always use async, await if you are encoutring with https request
    const response =await axios.post(`${baseUrl}/blog`,data,{
      // for the images and videos we have to change the content-type   
      headers:{
        "Content-Type" : "multipart/form-data",
        "Authorization" : localStorage.getItem('token')
      }
    })
if(response.status === 201){
  navigate('/')
}
else{
  alert("something went wrong")
}
    }catch{
      alert(error?.response?.data?.message)
    }
  }
  return (
   <>
   <Layout>
    <Form type='Create' onSubmit={handleCreateBlog}/>
   </Layout>
   </>
  );
}

export default AddBlog;
