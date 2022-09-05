import React, { useState } from 'react'

const AddCategory = ({ onAddCategory }) => {
  const [input, setInput] = useState('')

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (input.trim().length <= 1) return

    // aca enviamos la info al padre
    onAddCategory(input.trim())
    setInput('')
  }


  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Buscar Gifs" value={input} onChange={onInputChange}/>
    </form>
  )
}

export default AddCategory