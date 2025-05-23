
import React from 'react'

export default function Main() {
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    //destructing the array 
    const [ingredients ,setIngredients] = React.useState([])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}> {ingredient} </li>
    ))

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return(
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input 
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name = "ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}



{/*

    *********Important Notes*********


export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}> {ingredient} </li>
    ))
    
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}

// you are using .map() to iterate over the ingredients array, and for each ingredient, you are creating a new <li> element and assigning the ingredient itself as the key, it means that each list item will receive a unique key as long as the items in your ingredients array are unique.

// In your example:

//     The first <li> will get the key "Chicken".
//     The second <li> will get the key "Oregano".
//     The third <li> will get the key "Tomatoes".

// Since "Chicken", "Oregano", and "Tomatoes" are all different strings, each <li> element will have a distinct and unique key prop.

// <li key="Chicken"> Chicken </li> this is how it looks 


*/}