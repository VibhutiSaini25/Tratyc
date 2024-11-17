import React, { useEffect, useState } from "react";

function Quote() {
    const quotes = [
        { text: "Real food doesn't have ingredients, real food is ingredients.", author: "Jamie Oliver" },
        { text: "Cooking is like love. It should be entered into with abandon or not at all.", author: "Harriet Van Horne" },
        { text: "The secret of success in life is to eat what you like and let the food fight it out inside.", author: "Mark Twain" },
        { text: "One cannot think well, love well, sleep well, if one has not dined well.", author: "Virginia Woolf" },
        { text: "You don't have to cook fancy or complicated masterpieces—just good food from fresh ingredients.", author: "Julia Child" },
        { text: "Food is symbolic of love when words are inadequate.", author: "Alan D. Wolfelt" },
        { text: "Good food is the foundation of genuine happiness.", author: "Auguste Escoffier" },
        { text: "Laughter is brightest in the place where food is.", author: "Irish Proverb" },
        { text: "People who love to eat are always the best people.", author: "Julia Child" },
        { text: "Cooking and eating brings us together and encourages conversations. A meal shared is a journey started.", author: "Ronnie Koenig" },
        { text: "The discovery of a new dish does more for human happiness than the discovery of a new star.", author: "Jean Anthelme Brillat-Savarin" },
        { text: "There is no sincerer love than the love of food.", author: "George Bernard Shaw" },
        { text: "Food for the body is not enough. There must be food for the soul.", author: "Dorothy Day" },
        { text: "First, we eat. Then, we do everything else.", author: "M.F.K. Fisher" },
        { text: "Life is a combination of magic and pasta.", author: "Federico Fellini" },
        { text: "Food is our common ground, a universal experience.", author: "James Beard" },
        { text: "If you really want to make a friend, go to someone’s house and eat with him… the people who give you their food give you their heart.", author: "Cesar Chavez" },
        { text: "All happiness depends on a leisurely breakfast.", author: "John Gunther" },
        { text: "Let food be thy medicine and medicine be thy food.", author: "Hippocrates" },
        { text: "We all eat, and it would be a sad waste of opportunity to eat badly.", author: "Anna Thomas" },
        { text: "There is no better reward for hard work than good food.", author: "Unknown" },
        { text: "Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.", author: "Giada De Laurentiis" },
        { text: "Eating is a necessity, but cooking is an art.", author: "Unknown" },
        { text: "To eat is a necessity, but to eat intelligently is an art.", author: "François de La Rochefoucauld" },
        { text: "Food is the most primitive form of comfort.", author: "Sheilah Graham Westbrook" },
        { text: "The only thing I like better than talking about food is eating.", author: "John Walters" },
        { text: "After a good dinner, one can forgive anybody, even one’s own relatives.", author: "Oscar Wilde" },
        { text: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.", author: "Adelle Davis" },
        { text: "A recipe has no soul. You, as the cook, must bring soul to the recipe.", author: "Thomas Keller" },
        { text: "Cooking is at once child’s play and adult joy. And cooking done with care is an act of love.", author: "Craig Claiborne" },
        { text: "Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.", author: "Ruth Reichl" }
    ];
    

    const [randomQuote, setRandomQuote] = useState({});

    useEffect(() => {
        const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setRandomQuote(selectedQuote);
    }, []);

    return (
        <div  id="quote" style={{display:"grid",placeItems:"center"}}>
            <h3 style={{color:"black"}}>{randomQuote.text}</h3>
            <cite style={{color:"black"}}>- {randomQuote.author}</cite>
        </div>
    );
}

export default Quote;
