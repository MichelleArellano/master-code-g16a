import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import App from '../App'
import Form from '../pages/Form'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/login' element={<App />} />
        <Route path='/signup' element={<App />} />
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
