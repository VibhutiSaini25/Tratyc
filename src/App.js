import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Order from './components/Order';
import RandRecipe from './components/RandRecipe';
import About from './components/About';
import FunFacts from './components/Funfacts';
import Trending from './components/trending'; // Import the Trending component

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage onScrollToTop={scrollToTop} onScrollToBottom={scrollToBottom} />} />
        <Route path="/order" element={<Order />} />
        <Route path="/random-recipe" element={<RandRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/fun-facts" element={<FunFacts />} />
        {/* New route for Trending page */}
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </Router>
  );
}

export default App;
