import React, { useEffect, useState } from 'react';
import './trending.css';
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [trendingDishes, setTrendingDishes] = useState([]);
  const navigate = useNavigate();

  // Fetch 10 random trending dishes when the component loads
  useEffect(() => {
    fetchTrendingDishes();
  }, []);

  const fetchTrendingDishes = async () => {
    try {
      const dishes = [];
      
      // Fetch 10 random dishes
      for (let i = 0; i < 4; i++) {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        
        // Add each random dish to the array
        if (data.meals && data.meals.length > 0) {
          const meal = data.meals[0];
          dishes.push({
            name: meal.strMeal,
            image: meal.strMealThumb,
          });
        }
      }

      // Update state with the 10 dishes
      setTrendingDishes(dishes);
    } catch (error) {
      console.error('Error fetching trending dishes:', error);
    }
  };

  return (
    <div className="trending-container">
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
      
      <h1 className="trending-title">Trending Dishes</h1>
      
      <div className="trending-grid">
        {trendingDishes.map((dish, index) => (
          <div key={index} className="trending-item">
            <img src={dish.image} alt={dish.name} className="trending-image" />
            <h3>{dish.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
