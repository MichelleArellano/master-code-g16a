// REGLAS PARA CREAR UN HOOK
// Custom Hook es una función que utiliza otros hooks de React.
// 1. Siempre debemos usar la palabra 'use' al nombrarlo: useForm
// 2. Siempre deben de ser funciones (a partir de React v16 usamos hooks)
// 3. Siempre debe de usar al menos un Hook de React (useState, useEffect, useRef, etc.)
// 4. Deben ser reutilizables, no para casos muy especificos.

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado único para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [defaults])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    // Equivalente a:
    // const name = event.target.name
    // const value = event.target.value
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // Evito que se recargue la página y rompa el SPA
    callback(input) // Esta es una función que yo le envio como parametro
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
