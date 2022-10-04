import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { getAllItems } from '../services/actions.js'
import '../styles/home.css'
import 'styled-components'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [charactersArray, setcharactersArray] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      getAllItems().then((res) => {
        setcharactersArray(res)
        console.log('res', res)
      })
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  const searchData = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  let results = []
  if (!search) {
    results = charactersArray
  } else {
    results = charactersArray.filter((character) =>
      character.product_name.toLowerCase().includes(search.toLowerCase())
    )
  }

  return (
    <>
      <Header searchData={searchData} />
      <main>
        <div className='grid-container'>
          {charactersArray.length <= 0
            ? (
              <h1>Loading...</h1>
              )
            : (
                results.map((characters) => (
                  <div
                    key={characters._id}
                    className='dflex card-container mt-sm-4 mb-sm-4'
                  >
                    <div className='card'>
                      <div className='card-body card-class'>
                        {!characters.image || !characters.image.includes('/')
                          ? (
                            <div className='d-flex align-items-center justify-content-center img-class-container'>
                              <img
                                src='../src/assets/img/img-not-available.png'
                                alt='productImg'
                                className='img-class'
                              />
                            </div>
                            )
                          : (
                            <div className='d-flex align-items-center justify-content-center img-class-container'>
                              <img
                                src={characters.image}
                                alt='productImg'
                                className='img-class'
                              />
                            </div>
                            )}
                        <div className='align-items-center justify-content-center'>
                          <h5 className='card-title mt-sm-2 title-class'>
                            {characters.product_name}
                          </h5>
                          <h6 className='card-subtitle mt-sm-2 mb-sm-3 text-muted'>
                            {characters.brand}
                          </h6>
                        </div>
                        <button
                          className='btn btn-primary'
                          onClick={() => {
                            navigate(`/product_detail/${characters._id}`)
                          }}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
