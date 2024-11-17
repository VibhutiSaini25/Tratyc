import React from 'react';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';

const MainPage = ({ onScrollToTop, onScrollToBottom }) => {
  const navigate = useNavigate();
  const goToFunFacts = () => {
    navigate('/fun-facts');
  };

  const goToTrending = () => {
    navigate('/trending');
  };

  return (
    <div className="App">
      <header>
        <nav id="navbar">
          <div id="logo">
            <img className="logo" src="./logo.jpg" alt="RandomFoodGenerator.com" />
          </div>
          <ul>
            <li className="item">
              <a href="#" onClick={onScrollToTop}>Home</a>
            </li>
            <li className="item">
              <a href="#" onClick={() => navigate('/about')}>About Us</a>
            </li>
            <li className="item">
              <a href="#" onClick={onScrollToBottom}>Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h1 className="h-primary">Welcome to TRATYC</h1>
        <h3 className="p">Do not know what to order or cook?</h3>
        <h3 className="p">Worry not, RFG is here for you! The Random Food Generator!!</h3>
        <button className="btn" onClick={() => navigate('/order')}>Order Now</button>
      </section>

      <div className="row">
        <div className="sections-container">
          <section className="services-cont1">
            <div id="services1">
              <div className="box1">
                <div className="imgcont">
                  <img src="https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067" alt="" />
                </div>
                <h2 className="h-secondary center">Recipes</h2>
                <button className="btn1" onClick={() => navigate('/random-recipe')}>See Random Recipe</button>
              </div>
            </div>
          </section>

          <section className="services-cont2">
            <div id="services2">
              <div className="box2">
                <div className="imgcont">
                  <img src="https://img.freepik.com/free-vector/modern-question-mark-template-idea-message-vector_1017-47932.jpg" alt="" />
                </div>
                <h2 className="h-secondary center">Fun Facts</h2>
                <button className="btn2" onClick={goToFunFacts}>Fun Facts</button>
              </div>
            </div>
          </section>

          {/* New section for Trending */}
          <section className="services-cont3">
            <div id="services3">
              <div className="box3">
                <div className="imgcont">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDn9hblK2EhRBQO9RLrz6jq78jLkf0JcNhv3V_GUjWiUAMts4Dr3bjOz0FOmRWf5yrTgk&usqp=CAU" alt="Trending Dishes" />
                </div>
                <h2 className="h-secondary center">Trending</h2>
                <button className="btn3" onClick={goToTrending}>See Trending Dishes</button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer>
        <div className="footer">
          <ul>
            <li className="f">Phone number: 1234569848</li>
            <li className="f">Email address: abc@gmail.com</li>
            <li className="f">Service number: 1800 4000 4422</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
