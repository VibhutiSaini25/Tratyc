import React, { useState, useEffect } from 'react';

const MealItem = ({ meal }) => {
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
  const [userLocation, setUserLocation] = useState('guntur'); // Default location

  // Function to get user's city from coordinates
  const fetchCityFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      const city = data.address?.city || data.address?.state || 'guntur'; // Default to 'guntur' if city is unavailable
      setUserLocation(city.toLowerCase().replace(/\s+/g, '-')); // Format city for the URL
    } catch (error) {
      console.error('Failed to retrieve city name:', error);
    }
  };

  // Request location permission and get city
  const requestLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCityFromCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Location permission denied:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const toggleDeliveryOptions = () => {
    setShowDeliveryOptions(!showDeliveryOptions);
  };

  return (
    <div className="meal-item">
      <div className="meal-img">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="meal-name">
        <h3>{meal.strMeal}</h3>
        <button className="recipe-btn" onClick={toggleDeliveryOptions}>
          Go to Order
        </button>
        {showDeliveryOptions && (
          <div className="delivery-options">
            <button style={{backgroundColor:"orange"}}
              onClick={() =>
                window.open(`https://www.swiggy.com/search?query=${meal.strMeal}`, '_blank')
              }
            >
              Swiggy
            </button>
            <button style={{backgroundColor:"red"}}
              onClick={() =>
                window.open(`https://www.zomato.com/${userLocation}/delivery/dish-${meal.strMeal}`,'_blank')
              }
            >
              Zomato
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealItem;
