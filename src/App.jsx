import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AddBlog from './pages/blog/AddBlog'
import Editblog from './pages/blog/Editblog'
import SingleBlog from './pages/blog/SingleBlog'


function App() {


  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/blog/add' element={<AddBlog/>}></Route>
    <Route path='/blog/edit' element={<Editblog/>}></Route>
    <Route path='/blog/id' element={<SingleBlog/>}></Route>
   </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App
