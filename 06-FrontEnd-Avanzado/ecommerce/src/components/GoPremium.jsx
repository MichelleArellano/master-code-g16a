import React from 'react'
import '../styles/goPremium.css'
import Cat from '../components/Cat'

const GoPremium = () => {
  return (
    <>
      <main className='img-background'>
        <div className='text-container'>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='text-center text-position-gopremium-class'>
              <label className='text-gopremium-class ms-sm-4 me-sm-4 mt-sm-2 filter-blur-out'>
                Be your own boss, are you ready to be part of this?
              </label>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center mt-sm-4'>
            <button className='btn btn-success filter-blur-out'>Buy premium</button>
          </div>
        </div>
        <div className='cat-class-container d-flex align-items-end justify-content-end pe-sm-4'>
          <Cat />
        </div>
      </main>
    </>
  )
}

export default GoPremium
