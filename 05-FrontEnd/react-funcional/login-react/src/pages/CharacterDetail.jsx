import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate,useParams} from 'react-router-dom';
import axios from 'axios'

const CharacterDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  console.log("location",location)
  // console.log('navigate',navigate)
  // console.log('params',params)

  const [infoCharacter, setInfoCharacter ] = useState({
    name: '',
    films: []
  })

  useEffect(()=> {
    (async () => {
      try {
        const { data } = await axios.get(`https://swapi.dev/api/people/${params.id}`)
        setInfoCharacter(data)
      } catch (error){
        console.log('error',error)
      } 
    })()
  },[params.id])

  return (
    <div style={{ width: 'auto', border: "1px solid #cccccc"}}>
      <button onClick={() => navigate(-1)}>Atras</button>
      <h3> Información detallada del personaje</h3>
      <div>
        <b>Nombre: {infoCharacter.name}</b>
        <ul>
          {infoCharacter?.films?.length > 0 ? infoCharacter.films.map((value,index) => {
            return (
                <li>Film {index + 1 } - {value} </li>
            )
          }): <b>Este personaje no tiene peliculas 🥲</b>}
        </ul>
      </div>
    </div>
  )
}

export default CharacterDetail