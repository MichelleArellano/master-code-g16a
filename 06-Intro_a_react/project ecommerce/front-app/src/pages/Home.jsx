import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CharacterDetail from "./CharacterDetail";
import { Link, useNavigate } from "react-router-dom";
import { getAllItems } from "../calls/actions.js";

const Home = ({ logout }) => {
  const [charactersArray, setcharactersArray] = useState([]);
  const [idCharacter, setidCharacter] = useState(0);

  const navigate = useNavigate();

  const fecha_actual = new Date().toLocaleDateString();
  /**
   *  IMPLEMENTAR LLAMADA SWAAPI CUANDO SE MONTE EL COMPONENT, UNA SOLA VEZ
   */

  useEffect(() => {
    getAllItems().then((res) => {
      console.log("Items");
      console.log(res);
      setcharactersArray(res.filter((items) => items.isActive === true));
      console.log(`character array ${charactersArray}`);
    });
  }, []);

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
    {
      /* STEP 2 MANDAR INFO DE COMP HIJO AL PADRE (función) */
    }
    logout();
  };

  const handleCharacterId = (id) => setidCharacter(id);

  // POR MEDIO DE UN EVENTO MANDAR EL ID  DE CADA PERSONAJE

  return (
    <>
      <Header></Header>
      <main>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        {!charactersArray.length ? (
          <h4> Cargando... </h4>
        ) : (
          charactersArray.map((objectInfo, index) => (
            <Link to={`/character/${objectInfo._id}`}>
              <h3 key={index}>{objectInfo.product_name}</h3>
            </Link>
          ))
        )}
        {idCharacter > 0 && <CharacterDetail id={idCharacter} />}
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
