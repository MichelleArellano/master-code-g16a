import React, { useState, useContext } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  NavLink
} from 'react-router-dom'
import '../styles/header.css'
import { ContextUser } from '../context/ContextUser'

const Header = ({ searchData }) => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(ContextUser)
  console.log(user)
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
              {
                window.location.pathname === '/' || window.location.pathname === '/home'
                  ? <>
                    <div className='d-flex justify-content-end'>
                      <input
                        id='search-name'
                        className='form-control me-2'
                        type='search'
                        placeholder='Search by product'
                        aria-label='Search'
                        onChange={(event) => searchData(event)}
                      />
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button
                        id='sign-in-btn'
                        className='btn btn-primary'
                        type='button'
                        onClick={() => {
                          navigate('/signup')
                        }}
                      >
                        Sign Up
                      </button>
                    </div>
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
                    </>
                  : window.location.pathname === '/login'
                    ? <>
                      <NavLink to='/home'>Home</NavLink>
                      <div className='d-flex justify-content-end'>
                        <button
                          id='sign-in-btn'
                          className='btn btn-primary'
                          type='button'
                          onClick={() => {
                            navigate('/signup')
                          }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </>
                    : window.location.pathname === '/signup'
                      ? <>
                        <NavLink to='/home'>Home</NavLink>
                        <div className='d-flex justify-content-end'>
                          <button
                            id='sign-in-btn'
                            className='btn btn-primary'
                            type='button'
                            onClick={() => {
                              navigate('/login')
                            }}
                          >
                            Sign In
                          </button>
                        </div>
                        </>
                      : <p />
              }
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
