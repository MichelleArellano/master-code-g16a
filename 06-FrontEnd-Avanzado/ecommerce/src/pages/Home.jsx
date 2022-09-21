import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { getAllItems } from '../services/actions.js'
import '../styles/home.css'
import 'styled-components'

const Home = ({ logout }) => {
  const [charactersArray, setcharactersArray] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const fecha_actual = new Date().toLocaleDateString()
  const [pending, setPending] = React.useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      getAllItems().then((res) => {
        setcharactersArray(res.filter((items) => items.isActive === true))
      })
      setPending(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  const columns = [
    {
      name: 'Product',
      selector: (row) => row.product_name
    },
    {
      name: 'Brand',
      selector: (row) => row.brand
    },
    {
      name: 'Category',
      selector: (row) => row.category
    },
    {
      name: 'Price',
      selector: (row) => row.price
    },
    {
      name: 'Action',
      cell: (row) => (
        <button
          className='btn btn-primary'
          onClick={() => {
            navigate(`/product_detail/${row._id}`)
          }}
        >
          Buy
        </button>
      )
    }
  ]

  const searchData = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  const handleLogout = () => {
    setcharactersArray([])
    logout()
  }

  return (
    <>
      <Header searchData={searchData} />
      <main>
        <div className='table-btn-class'>
          <DataTable
            columns={columns}
            data={charactersArray.filter((item) => {
              if (search === '') {
                return item
              } else if (
                item.product_name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item
              }
            })}
            pagination
            progressPending={pending}
            dense
          />
        </div>
      </main>
      <div className='float-button'>
        <button
          className='button-mark'
          target='_blank'
        >
          <span className='material-icons-outlined'>
            exit_to_app
          </span>
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Home
