import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<App />} />
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
