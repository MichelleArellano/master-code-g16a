import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { getItemsById } from '../services/actions.js'
import '../styles/productDetail.css'

const ProductDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  console.log('location', location)

  const [infoCharacter, setInfoCharacter] = useState({})

  useEffect(() => {
    getItemsById(params.id).then((res) => {
      console.log('Items')
      console.log(res)
      setInfoCharacter(res)
      console.log(`character array ${infoCharacter}`)
    })
  }, [params.id])

  return (
    <>
      <Header />
      <main>
        <section className='d-flex justify-content-around'>
          <div className='col-4 mt-sm-4 mb-sm-4 ms-sm-4 me-sm-3 card'>
            <h1 className='mb-sm-2 mt-sm-3 font-weight-normal text-center'>
              {infoCharacter.product_name}
            </h1>
            <p className='p-class font-weight-bold'>Product id: </p>
            <p className='p-class-ids'>{infoCharacter._id}</p>
            <div>
              <div className='text-center'>
                <img
                  className='mt-3 shadow-lg p-3 mb-4 bg-body rounded'
                  src={infoCharacter.image}
                  alt='logoProduct'
                  height='200'
                />
              </div>
            </div>
          </div>
          <div className='col-7 mt-sm-4 mb-sm-4 ms-sm-3 me-sm-4 card'>
            <h3 className='mb-2 mt-sm-3 font-weight-normal text-center'>
              {infoCharacter.product_name} details:
            </h3>
            <p className='p-class-ids mb-4'>{infoCharacter.description}</p>
            <p className='p-class font-weight-bold'>Sku: </p>
            <p className='p-class-ids'>{infoCharacter.sku}</p>
            <p className='p-class font-weight-bold'>Price: </p>
            <p className='p-class font-weight-bold'>$ {infoCharacter.price}</p>
            <p className='p-class'>Brand: </p>
            <p className='p-class-ids font-weight-bold'>
              {infoCharacter.brand}
            </p>

            <p className='p-class'>Category: </p>
            <p className='p-class-ids font-weight-bold'>
              {infoCharacter.category}
            </p>
            <p className='p-class font-weight-bold'>Created at: </p>
            <p className='p-class-ids'>{infoCharacter.updatedAt}</p>
            <div className='col-12 d-flex justify-content-end mt-sm-3 mb-sm-3 pe-sm-5'>
              <button id='btn-login' className='btn btn-success'>
                <div className='d-flex justify-content-between align-items-center'>
                  <span className='material-symbols-outlined me-sm-2'>shopping_cart</span>
                  Add
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
      <div className='float-button'>
        <button
          onClick={() => navigate(-1)}
          className='button-mark'
          target='_blank'
        >
          <span className='material-icons-outlined'>arrow_back</span>
        </button>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail
