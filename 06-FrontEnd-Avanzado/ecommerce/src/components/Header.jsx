import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/header.css'
import { AuthContext } from '../context/AuthContext'

const Header = ({ searchData }) => {
  const { isAuth, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='#'>
              <img src='../src/assets/img/logo.png' alt='logo' />
              Little Foot Print
            </Link>
            <ul class='nav'>
              <li class='nav-item'>
                <Link class='nav-link active' aria-current='page' to='/dashboard'>
                  Dashboard
                </Link>
              </li>
            </ul>
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
              {!isAuth
                ? (
                  <>
                    {window.location.pathname === '/login'
                      ? (
                        <>
                          <div className='d-flex justify-content-end me-sm-2'>
                            <button
                              id='home-btn'
                              className='btn btn-light me-2'
                              type='button'
                              onClick={() => {
                                navigate('/home')
                              }}
                            >
                              Home
                            </button>
                            <button
                              id='sign-in-btn'
                              className='btn btn-primary me-2'
                              type='button'
                              onClick={() => {
                                navigate('/signup')
                              }}
                            >
                              Sign Up
                            </button>
                          </div>
                        </>
                        )
                      : window.location.pathname === '/signup'
                        ? (
                          <>
                            <div className='d-flex justify-content-end me-sm-2'>
                              <button
                                id='home-btn'
                                className='btn btn-light me-2'
                                type='button'
                                onClick={() => {
                                  navigate('/home')
                                }}
                              >
                                Home
                              </button>
                              <button
                                id='sign-in-btn'
                                className='btn btn-primary me-2'
                                type='button'
                                onClick={() => {
                                  navigate('/login')
                                }}
                              >
                                Sign In
                              </button>
                            </div>
                          </>
                          )
                        : (
                          <>
                            <div className='d-flex justify-content-end me-sm-2'>
                              <input
                                id='search-name'
                                className='form-control me-2'
                                type='search'
                                placeholder='Search by product'
                                aria-label='Search'
                                onChange={(event) => searchData(event)}
                              />

                              <button
                                id='sign-in-btn'
                                className='btn btn-primary me-2 btn-header-class'
                                type='button'
                                onClick={() => {
                                  navigate('/signup')
                                }}
                              >
                                Sign Up
                              </button>

                              <button
                                id='sign-up-btn'
                                className='btn btn-primary btn-header-class'
                                type='button'
                                onClick={() => {
                                  navigate('/login')
                                }}
                              >
                                Sign In
                              </button>
                            </div>
                          </>
                          )}
                  </>
                  )
                : (
                  <>
                    <div className='d-flex justify-content-end me-sm-2'>
                      <input
                        id='search-name'
                        className='form-control me-2'
                        type='search'
                        placeholder='Search by product'
                        aria-label='Search'
                        onChange={(event) => searchData(event)}
                      />

                      <button className='border border-primary rounded-circle me-2 btn-header-container'>
                        <span className='d-flex justify-content-center align-items-center material-symbols-outlined btn-header-account'>
                          person
                        </span>
                      </button>

                      <button
                        id='sign-up-btn'
                        className='btn btn-primary btn-header-class material-symbols-outlined'
                        type='button'
                        onClick={() => {
                          logout()
                          navigate('/')
                        }}
                      >
                        <div className='d-flex justify-content-between align-items-center'>
                          <span className='material-symbols-outlined'>
                            logout
                          </span>
                          Logout
                        </div>
                      </button>
                    </div>
                  </>
                  )}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
