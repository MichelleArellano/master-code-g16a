import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import '../styles/productDetail.css'

const HeaderCharacterDetail = () => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              <img src='../src/img/logo.png' alt='logo' />
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
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderCharacterDetail
