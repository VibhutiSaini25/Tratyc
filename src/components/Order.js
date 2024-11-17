import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MealItem from "./MealItem";
import Quote from "./Quote";
import "./Order.css";

function Order() {
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    // State for filters
    const [filters, setFilters] = useState({
        veg: false,
        nonVeg: false,
        vegan: false,
        desserts: false,
        beverages: false,
    });

    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        setFilters({ veg: false, nonVeg: false, vegan: false, desserts: false, beverages: false, [name]: checked });
    };
    const logSelection = async (filter, meal = null) => {
        try {
            await fetch('http://localhost:5000/api/logSelection', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ selectedFilter: filter, selectedMeal: meal })
            });
        } catch (error) {
            console.error("Error logging selection:", error);
        }
    };

    // Helper function to shuffle the meal list and get 5 random meals
    const getRandomMeals = (mealsList) => {
        return mealsList
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);
    };

    // Fetch meal list based on filters
    const getMealList = () => {
        setLoading(true);
        const { veg, nonVeg, vegan, desserts, beverages } = filters;
        let apiURL, selectedFilter;

        if (veg) { apiURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian'; selectedFilter = "Vegetarian"; }
        else if (nonVeg) { apiURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'; selectedFilter = "Non-Vegetarian"; }
        else if (vegan) { apiURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan'; selectedFilter = "Vegan"; }
        else if (desserts) { apiURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'; selectedFilter = "Desserts"; }
        else if (beverages) { apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'; selectedFilter = "Beverages"; }
        else apiURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                const mealsData = beverages && data.drinks ? [data.drinks[Math.floor(Math.random() * data.drinks.length)]] : getRandomMeals(data.meals || []);
                setMeals(mealsData);
                if (selectedFilter) logSelection(selectedFilter, mealsData[0]?.strMeal || mealsData[0]?.strDrink);
            })
            .catch((error) => console.error("Error fetching meals:", error))
            .finally(() => setLoading(false));
    };
    // Display each meal item with appropriate details
    return (
        <div className="container">
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

            <div className="meal-search">
                <Quote />
                <div className="meal-search-box">
                    <div className="filters">
                        <label>
                            <input type="checkbox" name="veg" checked={filters.veg} onChange={handleFilterChange} /> Vegetarian
                        </label>
                        <label>
                            <input type="checkbox" name="nonVeg" checked={filters.nonVeg} onChange={handleFilterChange} /> Non-Vegetarian
                        </label>
                        <label>
                            <input type="checkbox" name="vegan" checked={filters.vegan} onChange={handleFilterChange} /> Vegan
                        </label>
                        <label>
                            <input type="checkbox" name="desserts" checked={filters.desserts} onChange={handleFilterChange} /> Desserts
                        </label>
                        <label>
                            <input type="checkbox" name="beverages" checked={filters.beverages} onChange={handleFilterChange} /> Beverages
                        </label>
                    </div>
                    <button id="search-btn" onClick={getMealList}>
                        {loading ? "Loading..." : "Search Meals"}
                    </button>
                </div>
            </div>

            <div className="meal-results">
                {meals.map((meal) => (
                    <div className="meal-card" key={meal.idMeal || meal.idDrink}>
                        <div className="meal-img">
                            <img src={meal.strMealThumb || meal.strDrinkThumb} alt={meal.strMeal || meal.strDrink} />
                        </div>
                        <div className="meal-name">
                            <h3>{meal.strMeal || meal.strDrink}</h3>
                            <button 
                                className="recipe-btn" 
                                onClick={() => {
                                    const deliveryOptions = document.getElementById(`delivery-options-${meal.idMeal || meal.idDrink}`);
                                    if (deliveryOptions.style.display === "none" || deliveryOptions.style.display === "") {
                                        deliveryOptions.style.display = "block";
                                    } else {
                                        deliveryOptions.style.display = "none";
                                    }
                                }}
                            >
                                Go To Order!!
                            </button>
                           
                            <div 
                                className="delivery-options" 
                                id={`delivery-options-${meal.idMeal || meal.idDrink}`} 
                                style={{ display: "none" }}
                            >
                                <button 
                                    onClick={() => window.location.href = `https://www.zomato.com/search?q=${encodeURIComponent(meal.strMeal || meal.strDrink)}`} 
                                    style={{ color: "white", background: "red", borderRadius: "0.5rem" }}
                                >
                                    Zomato
                                </button><br />
                                <button 
                                    onClick={() => window.location.href = `https://www.swiggy.com/search?query=${encodeURIComponent(meal.strMeal || meal.strDrink)}`} 
                                    style={{ color: "white", background: "orange", borderRadius: "0.5rem" }}
                                >
                                    Swiggy
                                </button><br />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Order;
