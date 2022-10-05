import RoutesIndex from './routes/RoutesIndex'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        <RoutesIndex />
      </AuthProvider>
    </>
  )
}

export default App
