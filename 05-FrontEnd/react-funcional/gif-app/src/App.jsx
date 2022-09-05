
import { useState } from 'react'
import Grid from './components/Grid'
import AddCategory from './components/AddCategory'

function App() {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'One Piece'])

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return
    setCategories([newCategory,...categories])
  }

  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onAddCategory={onAddCategory}/>
      {
        categories.map((category) => (<Grid key={category} category={category}/>))
      }
      
     
    </>
  )
}

export default App
