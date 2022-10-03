import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home, Login, SignUp, ProductDetail } from '../pages'

const RoutesIndex = () => {
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

export default RoutesIndex
