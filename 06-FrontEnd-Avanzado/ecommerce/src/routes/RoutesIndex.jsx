import React, { useContext } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Home, Login, SignUp, ProductDetail, DashBoard } from '../pages'
import { AuthContext } from '../context/AuthContext'

const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={isAuth ? <DashBoard /> : <Navigate to='/login' replace />} />
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

export default RoutesIndex
