import React from 'react'
import '../styles/catAnimation.css'

const Cat = () => {
  return (
    <div class='cat mb-sm-3 ms-sm-3 mt-sm-3 me-sm-3'>
      <div class='ear ear--left' />
      <div class='ear ear--right' />
      <div class='face'>
        <div class='eye eye--left'>
          <div class='eye-pupil' />
        </div>
        <div class='eye eye--right'>
          <div class='eye-pupil' />
        </div>
        <div class='muzzle' />
      </div>
    </div>
  )
}

export default Cat
