import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Funfacts.css';

const funFactsList = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "Apples float on water because they are 25% air.",
    "A single strand of spaghetti is called a 'spaghetto'.",
    "Bananas are berries, but strawberries aren’t.",
    "Tomatoes were once considered poisonous in the United States.",
    "The world's most expensive pizza costs $12,000 and takes 72 hours to make.",
    "Peanuts aren’t nuts; they are legumes.",
    "The average person consumes about 35 tons of food in a lifetime.",
    "Did you know watermelon is 92% water?",
    "Carrots were originally purple in color before being selectively bred to be orange.",
    "Ketchup was once sold as medicine in the 1830s.",
    "Potatoes can absorb and reflect Wi-Fi signals, making them useful for testing Wi-Fi strength.",
    "The world’s most expensive coffee, Kopi Luwak, is made using coffee beans that have been eaten and defecated by civet cats.",
    "French fries were invented in Belgium, not France.",
    "Pineapple can take up to two years to grow.",
    "Mushrooms are more closely related to humans than they are to plants.",
    "The popsicle was invented by an 11-year-old by accident in 1905.",
    "Ripe cranberries will bounce like rubber balls.",
    "Nutmeg is poisonous if consumed in large amounts.",
    "An avocado has more potassium than a banana.",
    "It takes about 540 peanuts to make a 12-ounce jar of peanut butter.",
    "Bees collect nectar in their 'crop,' which is like a second stomach, and regurgitate it into the hives.",
    "French fries weren’t invented in France. They’re actually from Belgium.",
"Americans eat about 20 million hot dogs each year.",
"Ketchup was once used as medicine.",
"Almost all ears of corn have 16 rows of kernels.",
"The stickers on fruit are edible.",
"White chocolate does not contain any chocolate.",
"Ripe cranberries bounce like rubber balls.",
"Carrots were originally purple, not orange.",
"American cheese is from Switzerland, not America.",
"Crushed beetles are the main ingredient in most food dyes.",
"Peanuts are an ingredient in dynamite.",
"Even though they are different colors, all Fruit Loops are the same flavor.",
"Pretzels were once considered a symbol of love and often made at weddings.",
"It can take over 400 licks to get to the center of a Tootsie Pop.",
"Yubari King cantaloupes can cost as much as $27,000.",
"If you eat too many carrots, your skin can turn orange.",
"Astronauts planted potatoes in outer space during a trip in 2005.",
"'Dorito' is a Spanish word that means 'little golden things.'",
"Honey Nut Cheerios don’t include any nuts.",
"Pumpkin pie dates back to the year 1623, making it about 400 years old.",
"Thousands of years ago, Chinese, Arab, and Egyptian people made the first lollipops.",
"Some fireworks contain corn.",
"Blueberries used to have the name 'star berries' because of the star shape on one end.",
"The earliest ice cream, from the fifth century B.C., is thousands of years old.",
"There are almost always 10 segments in an orange slice.",
"Thomas Jefferson introduced mac and cheese to America.",
"People have been eating pasta for thousands of years.",
"Green beans have tiny hairs to trap bugs.",
"Raw lima beans contain deadly cyanide. Cooking them makes them safe to eat.",
"Cashews are not nuts. They are actually seeds.",
"There are more than 3000 varieties of pears.",
"If you have a latex allergy, you are also likely allergic to papaya.",
"If you add sugar to a vase, it will help your flowers live longer.",
"The largest tomato ever grown weighed over eight pounds.",
"Arachibutyrophobia is the fear of getting peanut butter stuck to the roof of your mouth.",
"Hot chocolate was invented in the ancient Mayan and Aztec cultures.",
"The first food eaten in outer space was applesauce.",
"Sweet potatoes and white potatoes are not related.",
"Mountain Dew contains concentrated orange juice.",
"Watermelons are popular gifts in China.",
"Every American eats an average of about 13 pounds of bananas each year.",
"America makes about one billion gallons of ice cream every year.",
"Peanut butter and jelly sandwiches were popular foods for soldiers during World War II.",
"Raspberries are members of the rose family.",
"Rhubarb grows so quickly that you can hear it.",
"Bananas are actually berries.",
"Lemons float, but limes sink.",
"Ancient civilizations used chocolate as money.",
"The quinine in tonic water makes it glow in the dark.",
"The most expensive pizza in the world costs $12,000.",
"Wild salmon are pink because of all the shrimp they eat.",
"Cheese is the most stolen food in the world.",
"One in four hazelnuts ends up in Nutella.",
"McDonald’s sells 2.5 billion hamburgers every year.",
"In ancient Egypt, radishes were currency to pay employees.",
"Bird saliva is a delicacy in China.",
"Food tastes different on an airplane than it does on the ground.",
"About half of all adults in America eat at least one sandwich per day.",
"Pule cheese made from donkey milk can cost up to $1000 a pound.",
"In Colombia, people eat dried ants at the movies instead of popcorn.",
"Fruit is a main ingredient in jam while fruit juice is a main ingredient in jelly.",
"Nutritious foods cost up to ten times more than junk food.",
"Fortune cookies are from San Francisco, not China.",
"The amount of Nutella sold each year is enough to circle the globe 1.8 times.",
"The most common meat to eat in the world is goat meat.",
"Each year, Americans eat 500 million pounds of peanut butter.",
"The pits of cherries, peaches, plums, and nectarines contain deadly cyanide.",
"Shower loofahs grow inside gourds.",
"Pineapple fruits take two to three years to grow.",
"Green gummy bears are strawberry flavored, not apple flavored.",
"Broccoli contains more protein than steak.",
"It takes an average of 50 licks to eat an ice cream cone.",
"The crumb filling in Kit Kats consists of broken Kit Kat bars.",
"A dentist invented cotton candy.",
"The average person will eat 3000 peanut butter and jelly sandwiches in their lifetime.",
"Ranch dressing contains titanium dioxide, which is an ingredient in sunscreen.",
"A fast-food burger can have meat from up to 100 different cows.",
"Apples can stay fresh for up to one year.",
"Gum was invented 9000 years ago.",
"Heinz ketchup must come out of the bottle at 0.28 miles per hour before stores can sell it.",
"It is impossible for honey to spoil because it contains so much sugar.",
"If cows eat too many carrots, it makes their milk turn pink.",
"Since the sun shines for up to 20 hours a day, Alaska grows the largest vegetables.",
"Grapes explode when you heat them in the microwave.",
"It would take eating a different kind of apple each day for 27 years to taste all the different varieties.",
"During the Middle Ages, people used pepper to pay their taxes.",
"There can be fragments of bugs in many packaged foods.",
"Jellybeans are shiny because they are coated with shellac – the same thing used to paint fake fingernails."

];

const FunFacts = () => {
    const [randomFact, setRandomFact] = useState("");
    const navigate = useNavigate();

    const generateRandomFact = () => {
        const fact = funFactsList[Math.floor(Math.random() * funFactsList.length)];
        setRandomFact(fact);
    };

    return (
        
        <div className="fun-facts-page">
            
            <nav className="fun-facts-nav">
            <div id="logo">
                        <img className="logo" src="./logo.jpg" alt="RandomFoodGenerator.com" />
                    </div>
                <button className="home-btn" onClick={() => navigate('/')}>
                    Home
                </button>
            </nav>
            <div className="fun-facts-container">
                <h2 style={{ color: "green" }}>Did You Know?</h2>

                {randomFact && <p className="fun-fact">{randomFact}</p>}
            </div>
            <button className="generate-fact-btn" onClick={generateRandomFact}>
                Show Random Fun Fact
            </button>
        </div>
    );
};

export default FunFacts;
