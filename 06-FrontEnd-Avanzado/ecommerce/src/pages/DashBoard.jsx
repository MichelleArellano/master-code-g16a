import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { getItems } from '../services/actions'
import '../styles/home.css'
import 'styled-components'

const DashBoard = () => {
  const [charactersArray, setcharactersArray] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const [pending, setPending] = React.useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      getItems().then((res) => {
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
        <>
          <button
            className='d-flex btn btn-success pt-sm-2 pe-sm-2 ps-sm-2 pb-sm-2 me-sm-2 justify-content-center align-items-center'
            onClick={() => {
              navigate(`/product_detail/${row._id}`)
            }}
          >
            <span className='material-symbols-outlined fs-6'>edit</span>
          </button>
          <button
            className='d-flex btn btn-danger pt-sm-2 pe-sm-2 ps-sm-2 pb-sm-2 me-sm-2 justify-content-center align-items-center'
            onClick={() => {
              navigate(`/product_detail/${row._id}`)
            }}
          >
            <span className='material-symbols-outlined fs-6'>delete</span>
          </button>
          <button
            className='d-flex btn btn-primary pt-sm-2 pe-sm-2 ps-sm-2 pb-sm-2 me-sm-2 justify-content-center align-items-center'
            onClick={() => {
              navigate(`/product_detail/${row._id}`)
            }}
          >
            <span className='material-symbols-outlined fs-6'>visibility</span>
          </button>
        </>
      )
    }
  ]

  const searchData = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  return (
    <>
      <Header searchData={searchData} />
      <main className='main-dashboard-class'>
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
      <Footer />
    </>
  )
}

export default DashBoard
