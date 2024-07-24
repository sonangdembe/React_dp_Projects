import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AddBlog from './pages/blog/AddBlog'


function App() {


  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/addblog' element={<AddBlog/>}></Route>
   </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App
