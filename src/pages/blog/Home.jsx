import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import { baseUrl } from '../../config'
import axios from 'axios'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const fectchBlogs = async() =>{
    const response = await axios.get(`${baseUrl}/blog`)
  if(response.status === 200 ){
   
    setBlogs(response.data.data)
  }
  }
 useEffect(()=>{
   fectchBlogs()
 },[])
     
  return (
    <>
 <Layout> 
  <div className='flex flex-wrap justify-center space-x-5 mt-6'>

    {
      blogs.length > 0 && blogs.map((blog)=>{
        return(
          <Card blog={blog} />
        )
      })
    }

  </div>
 </Layout>
    </>
  )
}

export default Home