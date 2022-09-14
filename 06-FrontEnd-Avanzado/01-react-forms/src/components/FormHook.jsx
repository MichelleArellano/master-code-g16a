import { useState, useEffect } from 'react'
import useForm from '../hooks/useForm'
import logo from '../assets/react.svg'

const FormHook = () => {
  /* Paso 1: Crear un ÚNICO estado con toda la info en forma de objeto */
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    genero: '',
    email: '',
    password: ''
  })

  const sendData = (data) => {
    console.log(data)
  }

  /* Paso 4: Uso mi custom Hook de useForm */
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  /* Paso 2: Voy a simular traer datos de una API y prerellenar el formulario */
  useEffect(() => {
    setTimeout(() => {
      const info = {
        // JSON que manda el backend
        nombre: 'César',
        apellido: 'Guerra',
        edad: 37,
        genero: 'M',
        email: 'cesar@devf.mx',
        password: 'passwordmuyseguro'
      }
      setDatos(info)
    }, 2000)
  }, [])

  /* Paso 3: Crear mi formulario */
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' width='200px' height='200px' />
        <form>
          <label htmlFor='nombre'>Nombre</label>
          <input
            type='text'
            name='nombre'
            placeholder='Tu nombre'
            id='nombre'
            onChange={handleInputChange}
            value={input.nombre}
          />

          <label htmlFor='apellido'>Apellido</label>
          <input
            type='text'
            name='apellido'
            placeholder='Tu apellido'
            id='apellido'
            onChange={handleInputChange}
            value={input.apellido}
          />

          <label htmlFor='edad'>Edad</label>
          <input
            type='number'
            name='edad'
            placeholder='Tu edad'
            id='edad'
            onChange={handleInputChange}
            value={input.edad}
          />

          <label htmlFor='genero'>Genero</label>
          <select
            name='genero'
            id='genero'
            onChange={handleInputChange}
            value={input.genero}
          >
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            onChange={handleInputChange}
            value={input.email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='******'
            id='password'
            onChange={handleInputChange}
            value={input.password}
          />

          <button onClick={handleSubmit}>Iniciar Sesión</button>

        </form>

      </div>
    </div>
  )
}
export default FormHook
