import React, { useState } from "react";
import './RandRecipe.css';
import { useNavigate } from "react-router-dom";
const RandRecipe = () => {
    const [meal, setMeal] = useState(null);
    const navigate = useNavigate();

    const logRandomRecipe = async (recipe) => {
        try {
            await fetch('http://localhost:5000/api/logSelection', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ randomRecipe: recipe })
            });
        } catch (error) {
            console.error("Error logging random recipe:", error);
        }
    };


    // Fetch a random meal recipe
    const getRandomMealRecipe = async () => {
        const apiURL = `https://www.themealdb.com/api/json/v1/1/random.php`;
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            const recipe = data.meals[0].strMeal;
            setMeal(data.meals[0]);
            logRandomRecipe(recipe);
        } catch (error) {
            console.error("Error fetching random meal:", error);
        }
    };
    return (
        <div>
            <header>
                <nav id="navbar">
                    <div id="logo">
                        <img className="logo" src="./logo.jpg" alt="RandomFoodGenerator.com" />
                    </div>
                    <ul>
                        <li className="item">
                            <a href="#" onClick={() => navigate('/')}>Home</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="h2">
                <h2>What does this do?</h2>

            </div>
            <div className="p">
                <h3>This feature helps in getting random recipe when you do not know what to make at home!!</h3>

            </div>


            <button className="btn" onClick={getRandomMealRecipe}>Get Random Recipe</button>

            {meal && (
                <div className="modal-overlay showRecipe">
                    <div className="modal-content">
                        <h2 className="recipe-title">{meal.strMeal}</h2>
                        <p className="recipe-category">{meal.strCategory}</p>
                        <div className="recipe-instruct">
                            <h3>Instructions:</h3>
                            <p>{meal.strInstructions}</p>
                        </div>
                        <div className="recipe-meal-img">
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </div>
                        <div className="recipe-link">
                            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch Video</a>
                        </div>
                        <button className="close-btn" onClick={() => setMeal(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RandRecipe;
