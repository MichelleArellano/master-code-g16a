import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/HeaderSignIn'
import '../styles/login.css'

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <section className='section-class img-background'>
          <div className='d-flex section-class'>
            <div className='section-class-login-1 col-4 d-flex align-items-center justify-content-center'>
              <div className='card card-dimesions-login-class'>
                <form id='form'>
                  <div className='text-center mt-sm-4 mb-sm-3'>
                    <img
                      className='mb-sm-2'
                      src='../src/assets/img/logo.png'
                      alt='logoLogin'
                      height='72'
                    />
                    <h1 className='h3 mb-sm-2 font-weight-normal'>Login</h1>
                  </div>
                  <div className='ms-sm-5 me-sm-5'>
                    <div className='col-sm-12'>
                      <label className='form-label'>User</label>
                      <div className='input-group input-group-sm'>
                        <span
                          className='input-group-text mb-sm-3'
                          id='inputGroupPrepend'
                        >
                          @
                        </span>
                        <input
                          type='text'
                          className='form-control mb-sm-3'
                          id='user'
                          required
                          value=''
                          name='user'
                          onChange=''
                        />
                      </div>
                    </div>
                    <div className='col-sm-12'>
                      <label className='form-label'>Password</label>
                      <div className='input-group input-group-sm'>
                        <input
                          type='text'
                          className='form-control mb-sm-3'
                          id='password'
                          required
                          value=''
                          name='password'
                          onChange=''
                        />
                      </div>
                    </div>
                    <div className='col-sm-12'>
                      <div className='form-check'>
                        <input
                          id='accountCheck'
                          className='form-check-input'
                          type='checkbox'
                          disabled
                          required
                        />
                        <label className='form-check-label mb-sm-4'>
                          I'm not a robot.
                        </label>
                      </div>
                    </div>
                    <div className='col-sm-12 d-flex justify-content-center'>
                      <button
                        id='btn-login'
                        className='btn btn-primary'
                        type='submit'
                        onClick=''
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='section-class-2 col-7 d-flex align-items-center justify-content-center'>
              <div className='text-position-login-class text-end'>
                <label className='text-class'>
                  Are you ready to be part of this?
                </label>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Login
