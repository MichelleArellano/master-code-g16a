import React, { useState } from 'react'
import RoutesIndex from './routes/RoutesIndex'
import { ContextUser } from './context/ContextUser'

function App () {
  const [user, setUser] = useState({
    email: 'email@email.com',
    password: 'passw0rd'
  })

  return (
    <>
      <ContextUser.Provider value={{
        user,
        setUser
      }}
      >
        <RoutesIndex />
      </ContextUser.Provider>
    </>
  )
}

export default App
