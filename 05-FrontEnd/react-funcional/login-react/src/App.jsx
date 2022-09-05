import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Form from "./components/Form"
import {
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import CharacterDetail from './pages/CharacterDetail'


function App() {

  const [isUserLogged, setisUserLogged] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const userSession = localStorage.getItem('isUserLogged')
    setisUserLogged(JSON.parse(userSession))
  },[])

  useEffect(() => {
    localStorage.setItem('isUserLogged', isUserLogged)
  }, [isUserLogged])

  const logout = () => {
    setisUserLogged(false)
    localStorage.clear()
    navigate("/login", { replace: true })
  }

  return (
     <Routes>
        <Route index element={<Navigate replace to={!isUserLogged ? "/login" : "/character"} />}/>
        { !isUserLogged &&  <Route path="/login" element={<Form setisUserLogged={setisUserLogged}/>}/> }
        { isUserLogged && <>
          <Route path="/character" element={<Home logout={logout}/>}/>
          <Route path="/character/:id" element={<CharacterDetail/>}/>
        </> }
        <Route path="*" element={<h3>Error 404</h3>}/>
      </Routes>
  );
}

export default App;
