import React from 'react'
import '../styles/header.css'
import { useNavigate } from 'react-router-dom'

const HeaderSignUp = () => {
  const navigate = useNavigate()

  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              <img src='../src/assets/img/logo.png' alt='logo' />
              Little Foot Print
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className='justify-content-end collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <div className='d-flex justify-content-end'>
                <button
                  id='sign-up-btn'
                  className='btn btn-primary'
                  type='button'
                  onClick={() => {
                    navigate('/login')
                  }}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderSignUp
