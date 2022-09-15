import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/HeaderSignUp'
import '../styles/signup.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const SignUp = () => {
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date())
  return (
    <>
      <Header />
      <main>
        <section className='section-class img-background'>
          <div className='d-flex section-class'>
            <div className='section-class-signup-1 col-5 d-flex align-items-center justify-content-center'>
              <div className='card card-dimesions-signup-class'>
                <form id='form'>
                  <div className='text-center mt-sm-3 mb-sm-3'>
                    <img
                      className='mb-sm-'
                      src='../src/assets/img/logo.png'
                      alt='logoLogin'
                      height='50'
                    />
                    <h1 className=' h3 mb-sm-3 font-weight-normal'>SignUp</h1>
                  </div>
                  <div className='ms-sm-4 me-sm-4'>
                    <div className='row align-items-start'>
                      <div className='col-sm-6'>
                        <label className='form-label'>First name</label>
                        <div className='input-group input-group-sm'>
                          <input
                            type='text'
                            className='form-control mb-sm-3'
                            id='first_name'
                            required
                            value=''
                            name='first_name'
                            onChange=''
                          />
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <label className='form-label'>Last name</label>
                        <div className='input-group input-group-sm'>
                          <input
                            type='text'
                            className='form-control mb-sm-3'
                            id='first_name'
                            required
                            value=''
                            name='first_name'
                            onChange=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row align-items-start'>
                      <div className='col-sm-6'>
                        <label className='form-label'>Gender</label>
                        <br />
                        <div class='form-check form-check-inline'>
                          <input
                            class='form-check-input'
                            type='radio'
                            name='gender'
                            id='inlineRadio1'
                            value='M'
                          />
                          <label class='form-check-label' for='inlineRadio1'>
                            Male
                          </label>
                        </div>
                        <div class='form-check form-check-inline'>
                          <input
                            class='form-check-input'
                            type='radio'
                            name='gender'
                            id='inlineRadio2'
                            value='F'
                          />
                          <label class='form-check-label' for='inlineRadio2'>
                            Female
                          </label>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <label className='form-label'>Birth date</label>
                        <DatePicker
                          className='datepicker-class'
                          selected={startDate}
                          dateFormat='dd/MM/yyyy'
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </div>
                    <div className='row align-items-start'>
                      <div className='col-sm-6 mt-sm-3'>
                        <label className='form-label'>Email</label>
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
                            id='email'
                            required
                            value=''
                            name='email'
                            onChange=''
                          />
                        </div>
                      </div>
                      <div className='col-sm-6 mt-sm-3'>
                        <label className='form-label'>Password</label>
                        <div className='input-group input-group-sm'>
                          <input
                            type='password'
                            className='form-control mb-sm-4'
                            id='password'
                            required
                            value=''
                            name='password'
                            onChange=''
                          />
                        </div>
                      </div>
                    </div>

                    <div className='col-sm-12 d-flex justify-content-center'>
                      <button
                        id='btn-login'
                        className='btn btn-primary mb-sm-3'
                        type='submit'
                        onClick=''
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='section-class-2 col-6 d-flex align-items-center justify-content-center'>
              <div className='text-position-signup-class text-end'>
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

export default SignUp
