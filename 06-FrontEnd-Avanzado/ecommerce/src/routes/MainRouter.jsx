import { Routes, Route, BrowserRouter, useNavigate, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import App from '../App'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product_detail/:id' element={<ProductDetail />} />
        <Route
          path='*'
          element={
            <>
              <h1>Error 404</h1>
              <strong>Page not found</strong>
            </>
              }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
