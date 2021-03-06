import React from 'react';
import './RecipeTiles.css';

const RecipeTiles = ({ recipe }) => {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) 
        != null && (
            <div className="recipeTile" onClick={() => {
                window.open(recipe["recipe"]["url"]);
            }}>
                <img className="recipeTile__img" src={recipe["recipe"]["image"]} alt=""/>
                <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
            </div>
        )
    );
}

export default RecipeTiles