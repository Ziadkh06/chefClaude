import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients 
that a user has and suggests a recipe they could make with
 some or all of those ingredients. You don't need to use every 
 ingredient they mention in your recipe. The recipe can include 
 additional ingredients they didn't mention, but try not to include 
 too many extra ingredients. Format your response in markdown to make it 
 easier to render to a web page
`

// In Vite, environment variables must be prefixed with VITE_
// and accessed through import.meta.env
// Put your actual token in a .env file like:
// VITE_HF_API_KEY=hf_your_token_here
const hfToken = import.meta.env.VITE_HF_API_KEY

if (!hfToken) {
    console.warn("Missing VITE_HF_API_KEY in your .env file")
}

const hf = hfToken ? new HfInference(hfToken) : null

function buildFallbackRecipe(ingredientsArr) {
    const ingredients = ingredientsArr.length > 0 ? ingredientsArr : ["eggs", "garlic", "onion"]
    const primary = ingredients[0]
    const secondary = ingredients[1] || "tomato"
    const third = ingredients[2] || "spinach"

    return `The recipe failed to generate `
}

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    if (!hf || !hfToken) {
        return buildFallbackRecipe(ingredientsArr)
    }

    try {
        const response = await hf.chatCompletion({
            model: "openai/gpt-oss-120b:fastest",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error("HF request failed:", {
            message: err?.message,
            status: err?.status,
            data: err?.data,
        })
        return buildFallbackRecipe(ingredientsArr)
    }
}
