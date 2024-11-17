import React from "react";

function MealDetailsModal({ meal, onClose }) {
    return (
        <div className="meal-details-modal">
            <div className="modal-content">
                <button id="recipe-close-btn" onClick={onClose}>Close</button>
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
            </div>
        </div>
    );
}

export default MealDetailsModal;
