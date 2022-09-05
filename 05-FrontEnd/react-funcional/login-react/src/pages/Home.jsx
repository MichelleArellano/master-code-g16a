import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./Home.css"
import CharacterDetail from "./CharacterDetail";
import { Link, useNavigate } from 'react-router-dom'

const Home = ({logout}) => {
  const [charactersArray, setcharactersArray] = useState([])
  const [idCharacter, setidCharacter] = useState(0)

  const navigate = useNavigate()
  
  const fecha_actual = new Date().toLocaleDateString();
  /**
   *  IMPLEMENTAR LLAMADA SWAAPI CUANDO SE MONTE EL COMPONENT, UNA SOLA VEZ
   */
  
  useEffect(() => {
    // getStarWarsCharacters()

    (async () => {
      try {
        const { data: { results } } = await axios.get('https://swapi.dev/api/people')
        setcharactersArray(results)
      } catch(error) {
        console.log('error', error)
      }
    })() // CON 👉🏽 () LA VOY A EJECUTAR 

    // return () => {
    //  alert('componente dismount')
    // }
  }, [])

  // const getStarWarsCharacters = async () => {
  //   try {
  //     const { data: { results } } = await axios.get('https://swapi.dev/api/people')
  //     console.log('result', results)
  //   } catch(error) {
  //     console.log('error', error)
  //   }
  // }
  
  // se deberá ocultar este componente ????? 🤡

  const handleLogout = () => {
     {/* STEP 2 MANDAR INFO DE COMP HIJO AL PADRE (función) */}
    logout()
  }


  const handleCharacterId = (id) =>setidCharacter(id)

  // POR MEDIO DE UN EVENTO MANDAR EL ID  DE CADA PERSONAJE

  return (
    <div style={{ border: "3px solid #f4f0f0", width: 350, height: 'auto', borderLeftColor: 'orange' }}>
      Usuario loggeado en el día de 🤡 {fecha_actual}
      <button onClick={() => navigate(1)}>Regresar al detalle</button>

      {/* SINTAXIS TERNARIO condition ? true : false */}
      {!charactersArray.length ? <h4> Cargando... </h4> : 
      charactersArray.map((objectInfo, index) => (
        <Link to={`/character/${index + 1}`}>
          <h3 className="select" key={index}> Nombre del personaje {objectInfo.name} - altura {objectInfo.height} </h3>
        </Link>
        // <h3 className="select" key={index} onClick={() => handleCharacterId(index + 1 )}> {console.log('objectInfo',objectInfo)}Nombre del personaje {objectInfo.name} - altura {objectInfo.height} </h3>
      ))
      }

      {idCharacter > 0 &&  <CharacterDetail id={idCharacter}  />}

      {/* STEP 1 DEFINIR EVENTO PARA CERRAR SESION */}
      <button onClick={handleLogout}> Cerrar sesión </button> 

      

    </div>
  );
};

export default Home;
