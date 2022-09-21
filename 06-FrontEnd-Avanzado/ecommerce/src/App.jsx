import React, { useState } from 'react'
import MainRouter from './routes/MainRouter'
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
        <MainRouter />
      </ContextUser.Provider>
    </>
  )
}

export default App
