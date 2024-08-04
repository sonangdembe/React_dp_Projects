import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Form from './components/form/Form';
import axios from 'axios';
import { baseUrl } from '../../config';

const EditBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  const editBlog = async () => {
    try {
      const response = await axios.patch(
        `${baseUrl}/blog/${id}`,
        blog,
        {
          headers: {
            "Authorization": localStorage.getItem('token')
          }
        }
      );

      if (response.status === 200) {
        navigate('/blog/' + id);
      }
    } catch (error) {
      console.error("There was an error updating the blog!", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBlog({
      ...blog,
      [name]: name === 'image' ? e.target.files[0] : value
    });
  };

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${baseUrl}/blog/${id}`);
      if (response.status === 200) {
        setBlog(response.data.data);
      }
    } catch (error) {
      console.error("There was an error fetching the blog!", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  return (
    <>
      <Layout>
        <Form 
          type='Edit' 
          onSubmit={editBlog} 
          blog={blog} 
          setBlog={setBlog} 
        />
      </Layout>
    </>
  );
};

export default EditBlog;
