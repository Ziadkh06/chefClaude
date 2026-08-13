import React from 'react'

export default function Main() {

  const [ingredients, setIngredients] = React.useState([])

  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))

  function handleSubmit(event){

    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients(prevArr => [...prevArr, newIngredient])
  }

  return (
    <main> 
        <form onSubmit={handleSubmit} className="add-ingredient-form">
            <input  
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button type="submit">Add Ingredient</button>
        </form>
        <ul>
            {ingredientsList}
        </ul>
    </main>
  )
}