import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/loginSignUp.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import useForm from '../hooks/useForm'
import { registerUser } from '../services/actions'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date())

  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: '',
    email: '',
    password: ''
  })

  const sendData = (data) => {
    data.birth_date = convertDate(startDate)
    console.log(data)
    const timeout = setTimeout(() => {
      registerUser(data).then((result) => {
        if (result.status === 200 || result.status === 201) {
          console.log('result', result)
          navigate('/login')
        } else {
          console.log('Sorry! Try again', result.status)
        }
      })
    }, 2000)
    return () => clearTimeout(timeout)
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, data)

  function convertDate (date) {
    const dateStr = date.toString()
    const parts = dateStr.split(' ')
    const months = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12'
    }
    return parts[3] + '-' + months[parts[1]] + '-' + parts[2]
  }

  return (
    <>
      <Header />
      <main>
        <section className='section-class img-background'>
          <div className='d-flex section-class'>
            <div className='section-class-signup-1 col-5 d-flex align-items-center justify-content-center'>
              <div className='card card-dimesions-signup-class'>
                <form id='form' onSubmit={handleSubmit}>
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
                            value={input.first_name}
                            name='first_name'
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <label className='form-label'>Last name</label>
                        <div className='input-group input-group-sm'>
                          <input
                            type='text'
                            className='form-control mb-sm-3'
                            id='last_name'
                            required
                            value={input.last_name}
                            name='last_name'
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row align-items-start'>
                      <div className='col-sm-6'>
                        <label className='form-label'>Gender</label>
                        <br />
                        <div className='form-check form-check-inline' value={input.gender} onChange={handleInputChange}>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='gender'
                            id='inlineRadio1'
                            value='M'
                          />
                          <label className='form-check-label' htmlFor='inlineRadio1'>
                            Male
                          </label>
                        </div>
                        <div className='form-check form-check-inline' value={input.gender} onChange={handleInputChange}>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='gender'
                            id='inlineRadio2'
                            value='F'
                          />
                          <label className='form-check-label' htmlFor='inlineRadio2'>
                            Female
                          </label>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <label className='form-label'>Birth date</label>
                        <DatePicker
                          className='datepicker-class'
                          selected={startDate}
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
                            value={input.email}
                            name='email'
                            onChange={handleInputChange}
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
                            value={input.password}
                            name='password'
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className='col-sm-12 d-flex justify-content-center'>
                      <button
                        id='btn-login'
                        className='btn btn-primary mb-sm-3'
                        type='submit'
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
