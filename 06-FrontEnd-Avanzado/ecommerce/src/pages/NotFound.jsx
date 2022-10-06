import React, { useContext } from 'react'
import '../styles/notFound.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const NotFound = () => {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)
  return (
    <>
      <div className='img-404-background-container d-flex justify-content-center align-items-center'>
        <img className='img-404-background' src='../src/assets/img/404error.jpg' alt='404notfound' />
      </div>
      <div className='float-button'>
        <button
          onClick={() => {
            logout()
            navigate('/')
          }}
          className='button-mark'
          target='_blank'
        >
          <span className='material-icons-outlined'>home</span>
        </button>
      </div>
    </>
  )
}

export default NotFound
