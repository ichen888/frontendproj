// App.js
// A majority of the code in this project was generated using ChatGPT, excluding specific formatting requirements like background color and padding in the return section

//Imports React and Axios, React is used for the application structure and axios allows us to make HTTP requests
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Defines all of our variables to manage what the user inputs, the cocktail data, errors, and glasses
function App() {
  const [glassType, setGlassType] = useState('');
  const [cocktail, setCocktail] = useState(null);
  const [error, setError] = useState('');
  const [glasses, setGlasses] = useState([]);

  //Defines the list of glasses by pulling from the reference list using Axios
  useEffect(() => {
    // Fetch the list of glasses on component mount
    const fetchGlasses = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
        setGlasses(response.data.drinks);
      } catch (error) {
        console.error('Error fetching glasses:', error);
      }
    };

    fetchGlasses();
  }, []);

  //Allows for User Input
  const handleInputChange = (e) => {
    setGlassType(e.target.value);
  };

  //Uses the API to find a random cocktail that use the glass specified, this uses the fetch method as required
  const fetchCocktail = async () => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${encodeURIComponent(glassType)}`);
      const drinks = response.data.drinks;

      if (drinks && drinks.length > 0) {
        const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
        const drinkDetailsResponse = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${randomDrink.idDrink}`);
        setCocktail(drinkDetailsResponse.data.drinks[0]);
        setError('');
      } else {
        setCocktail(null);
        setError('No cocktails found for this glass type.');
      }
    } catch (error) {
      console.error('Error fetching cocktail:', error);
      setCocktail(null);
      setError('An error occurred while fetching the cocktail.');
    }
  };

  //This builds the actual front end structure for the application
  return (
    <div style={{ padding: '20px', backgroundColor: '#E6E6FA'}}>
      <h1>Cocktail Finder</h1>
      <input
        type="text"
        placeholder="Enter glass type (e.g., Highball glass)"
        value={glassType}
        onChange={handleInputChange}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={fetchCocktail} style={{ padding: '5px' }}>Find Cocktail</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {cocktail && (
        <div style={{ marginTop: '20px' }}>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '200px', height: '200px' }} />
          <h3>Ingredients:</h3>
          <ul>
            {Object.keys(cocktail).filter(key => key.startsWith('strIngredient') && cocktail[key]).map(key => (
              <li key={key}>{cocktail[key]} - {cocktail[`strMeasure${key.match(/\d+/)[0]}`]}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{cocktail.strInstructions}</p>
        </div>
      )}

      <h2>Available Glasses</h2>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Glass Name</th>
          </tr>
        </thead>
        <tbody>
          {glasses.map((glass, index) => (
            <tr key={index}>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{glass.strGlass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//exports the app for it to run correctly
export default App;