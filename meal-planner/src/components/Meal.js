import React from 'react';
import {useState, useEffect} from 'react';

const Meal = ({meal}) => {
    const [imageUrl, setImageUrl]= useState('');

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