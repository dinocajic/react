import React from 'react';

import './Main.css';

import Recipe from '../Recipe/Recipe';

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recipes: [
                {
                    id: 1,
                    dishName: "Breakfast Shake",
                    ingredients: [
                        "1 scoop whey protein",
                        "1 banana",
                        "5 frozen strawberries",
                        "2 tablespoons peanut butter",
                        "2 tablespoons flaxseed",
                        "1 tablespoon coconut butter",
                        "1 cup almond milk"
                    ],
                    directions: "Add each ingredient to blender and mix.",
                    imgUrl: "https://www.verywellfit.com/thmb/Dy7Y40QrSsoPnH75fCsdCE5uZiA=/1000x0/Nutrition-Label-Embed-1955748633-902d277709e7441a975dfa520abf4a7a.png"
                },
                {
                    id: 2,
                    dishName: "Baked Potato with Quinoa and Pinto Beans (Lunch or Dinner)",
                    ingredients: [
                        "1 baked potato",
                        "1/2 cup low sodium pinto beans",
                        "1/2 cup quinoa"
                    ],
                    directions: "Preheat oven to 375. Bake potatoe for 60 minutes. Boil water and add quinoa. After water evaporates, lightly cook pinto beans on stove and add quinoa.",
                    imgUrl: "https://www.verywellfit.com/thmb/6IAOvSfweWrpisaffgq02AoLFqI=/1000x0/Nutrition-Label-Embed-1554674446-2f23cee350aa42c79f2130b2d9be038b.png"
                },
                {
                    id: 3,
                    dishName: "Red Potatoes with Quinoa and Pinto Beans (Lunch or Dinner)",
                    ingredients: [
                        "2 baked red potatos",
                        "1/2 cup low sodium pinto beans",
                        "1/2 cup quinoa"
                    ],
                    directions: "Preheat oven to 375. Bake potatoes for 60 minutes. Boil water and add quinoa. After water evaporates, lightly cook pinto beans on stove and add quinoa.",
                    imgUrl: "https://www.verywellfit.com/thmb/tB_4U-TAglrNRaXMrBg4KdV6JWg=/1000x0/Nutrition-Label-Embed--1871681304-efd14033f8ee42ba8b164c18b7c809cb.png"
                },
                {
                    id: 4,
                    dishName: "Baked Potato with Quinoa and Garbanzo Beans (Lunch or Dinner)",
                    ingredients: [
                        "1 baked potato",
                        "1/2 cup low sodium garbanzo beans",
                        "1/2 cup quinoa"
                    ],
                    directions: "Preheat oven to 375. Bake potatoe for 60 minutes. Boil water and add quinoa. After water evaporates, lightly cook garbanzo beans on stove and add quinoa.",
                    imgUrl: "https://www.verywellfit.com/thmb/bsI1Vl4njBRAGtZZJperFamtQuw=/1000x0/Nutrition-Label-Embed-1437561800-32fa69d677694f669b558a436d9ce81a.png"
                },
                {
                    id: 5,
                    dishName: "Red Potatoes with Quinoa and Garbanzo Beans (Lunch or Dinner)",
                    ingredients: [
                        "2 baked red potatos",
                        "1/2 cup low sodium garbanzo beans",
                        "1/2 cup quinoa"
                    ],
                    directions: "Preheat oven to 375. Bake potatoes for 60 minutes. Boil water and add quinoa. After water evaporates, lightly cook garbanzo beans on stove and add quinoa.",
                    imgUrl: "https://www.verywellfit.com/thmb/Wlf9Gb0oFC_nnIqEtICEgKHR85k=/1000x0/Nutrition-Label-Embed-1563704468-8d6f877b4e5a44bbbb913040192e774c.png"
                },
                {
                    id: 6,
                    dishName: "Lunch Salad",
                    ingredients: [
                        "1 cup frozen mixed vegetables",
                        "1/2 cup frozen corn",
                        "1/2 cup frozen lima beans",
                        "10 Portabella Mushrooms",
                        "1/2 cup of frozen green beans",
                        "10 steamed green beans"
                    ],
                    directions: "Mix together and fry on stove top.",
                    imgUrl: "https://www.verywellfit.com/thmb/Q8J3sxaiiTrZtqzrAFR_WqBlitU=/1000x0/Nutrition-Label-Embed-1564076154-321fd02063cc4b7abc4234b2fc553c60.png"
                },
                {
                    id: 7,
                    dishName: "Dinner Salad",
                    ingredients: [
                        "1 cup frozen mixed vegetables",
                        "1/2 cup frozen corn",
                        "1/2 cup frozen lima beans",
                        "1/2 cup of frozen green beans",
                        "1/2 avocado",
                        "1/4 cup sharp chedar cheese"
                    ],
                    directions: "Mix together and fry on stove top. Do not cook avocado and cheese; add them afterwards. ",
                    imgUrl: "https://www.verywellfit.com/thmb/69SqeXQNmtCNmfKcZc0Q_AClA5I=/1000x0/Nutrition-Label-Embed-175948047-6440738b63984c3eb21919b569b4c707.png"
                },

            ]
        }
    }

    
    render() {
        return (
            <main className="container">
                <h1>Dino's Workout Recipes</h1>
                <p>
                    All of the recipes and nutritional facts are displayed below.
                </p>
                <div className="row">
                    {
                        this.state.recipes.map(recipe => 
                            <Recipe 
                                key={recipe.id}
                                recipe={recipe}
                            />
                        )
                    }
                </div>
            </main>
        );
    }
}