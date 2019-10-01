import React from 'react';

import './Recipe.css';

export default function Recipe(props) {
    const {
        dishName,
        ingredients,
        imgUrl,
        directions
    } = props.recipe;

    return (
        <div className="col-sm-6 col-md-4 recipe">
            <h3>
                {dishName}
            </h3>
            <div>
                {directions}
            </div>
            <ul>
                {
                    ingredients.map((ingredient, index) => 
                        <li key={index}>{ingredient}</li>
                    )
                }
            </ul>
            <div>
                <img 
                    width="100%" 
                    alt={dishName}
                    src={imgUrl} 
                />
            </div>
        </div>
    );
}