import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Form = ({ setisUserLogged }) => {
  const [credentials, setcredentials] = useState({})
  const navigate = useNavigate()

  const userHardcoded = "usuarioG16";
  const passwordHardcoded = "passw0rd";

  const handleInputCredential = ({ target: { value, name }}) => { 
    //  DESTRUCTURING 👆🏽  event: { target: { value, name  }}
    { 
      /* STEP 4 - SETEAR MI ESTADO USER CON EL NUEVO ENTRANTE */
    }
    setcredentials({ ...credentials, [name]:  value })
    // 👍🏽 COPIA DE  OBJETO { ...object, age: 14, email: hola@devf.com, isActive:tue }
  };

  const validateLogin = () => {
    /* STEP 5 - DEFINIR UN EVENTO PARA VALIDAR LOGIN CON CREDENCIALES HARCODEADAS */

    // EJERCICIO ARREGLAR VALIDACION
    // if (user === "" || password === "") {
    //   alert("user o password vacio, validar");
    //   return;
    // }

    if (credentials.user === userHardcoded && credentials.password === passwordHardcoded) {
      {
        /* STEP 6 - DEFINIR CONDITIONAL RENDERING CON LOGIN EXTIOSO (CREACION DE UN NUEVO  ESTADO) */
      }
      setisUserLogged(true);
      setcredentials({})
      navigate("/character", {replace: true});
    }
  };
 

  return (
    <>
    <input
      required
      type="text"
      value={credentials.user}
      name="user"
      onChange={handleInputCredential}
    />

    <input
      required
      type="text"
      value={credentials.password}
      name="password"
      onChange={handleInputCredential}
    />

    <button type="submit" onClick={validateLogin}>
      Ingresar
    </button>
  </>
  )
}

export default Form