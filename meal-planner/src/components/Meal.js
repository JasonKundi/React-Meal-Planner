import React from 'react';
import {useState, useEffect} from 'react';

const Meal = ({meal}) => {
    const [imageUrl, setImageUrl]= useState('');

    useEffect(()=> {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=eca293f96dc34bddbbbf1b26adfa7c61&includeNutrition=false`
        )
        .then(res => res.json())
        .then(data => {
            setImageUrl(data.image)
        })
        .catch(()=> {
            console.log('Error')
        });
    }, [meal.id])

    return (
        <article>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt='recipe'/>
            <ul>
                <li>Prep Time: {meal.readyInMinutes} minutes</li>
                <li>Number of Servings: {meal.servings}</li>
            </ul>
            
            <a href={meal.sourceUrl}>Go to Recipe</a>
        </article>
    )
}

export default Meal