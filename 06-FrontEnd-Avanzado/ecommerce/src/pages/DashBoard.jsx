import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/dashboard.css'
import { AuthContext } from '../context/AuthContext'
import { getUserById } from '../services/actions'

const DashBoard = () => {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const timeout = setTimeout(() => {
      getUserById(user.id).then((res) => {
        if (res.status === 200) {
          setUserData(res.data)
          console.log(userData)
        }
      })
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Dashboard</h1>
          {
        user?.role === 'ADMIN'
          ? <h2>Hola Admin</h2>
          : <h2>Hola Customer</h2>
      }

          {
        user?.role === 'CUSTOMER' && <h4>Bienvenido seas Cliente</h4>
      }

          {
        user?.role === 'ADMIN' && <h4>Bienvenido seas Admin</h4>
      }

          {userData?.first_name && <p className='first_name'>First Name: {userData.first_name}</p>}

          {userData?.last_name && <p className='last_name'>Last Name: {userData.last_name}</p>}

          {userData?.gender && <p className='gender'>Gender: {userData.gender}</p>}

          {userData?.email && <p className='email'>Email: {userData.email}</p>}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default DashBoard
