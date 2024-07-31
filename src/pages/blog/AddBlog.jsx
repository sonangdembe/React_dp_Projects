import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { baseUrl } from "../../config";


const AddBlog = () => {


  const handleCreateBlog = async(data)=>{
    //always use async, await if you are encoutring with https request
    const response =await axios.post(`${baseUrl}/blog`,data)

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
