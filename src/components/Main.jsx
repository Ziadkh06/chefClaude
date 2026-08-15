import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(
      ["chicken", "oregano", "all the spices", "pasta"]
    )
    const [recipe, setRecipe] = React.useState("")
    
    async function getRecipe() {
        console.log(import.meta.env.VITE_HF_API_KEY?.slice(0, 10))
        const resultRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(resultRecipe)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && 
              <IngredientsList ingredients={ingredients} getRecipeButton={getRecipe} />
            }
            
            {recipe != "" && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}