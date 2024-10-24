# Cocktail Finder App

Sometimes you really want a cocktail but don't know what to make. Introducting the Cocktail Finder App. Simply input the type of glass you're holding and the app will spit out a random cocktail that fits your glass! Don't like the result, simply hit the button again for another random cocktail. This project is a React application that allows users to find cocktails based on the type of glass they have. Users can input the glass type, and the app will fetch a random cocktail recipe suitable for that glass. Additionally, the app displays a list of all available glass types.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)

## Features

- **Search Cocktails by Glass Type**: Enter a glass type to find a random cocktail recipe.
- **Display Ingredients and Instructions**: View detailed ingredients and instructions for each cocktail.
- **Available Glasses Table**: A comprehensive list of all possible glasses.
- **Pastel Purple Background**: Aesthetic background color for a pleasant user experience.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/cocktail-finder.git
   cd cocktail-finder
   ```

2. **Install Dependencies**:
   Ensure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Start the Application**:
   Launch the app with:
   ```bash
   npm start
   ```

4. **Open in Browser**:
   The application will automatically open in your default web browser at `http://localhost:3000`.

## Usage

1. **Input Glass Type**:
   - Enter the name of the glass type you have (e.g., "Highball glass") in the input field.

2. **Find Cocktail**:
   - Click the "Find Cocktail" button to fetch a random cocktail recipe that uses your specified glass type.

3. **View Cocktail Details**:
   - The app will display the cocktail's name, image, ingredients, and instructions.

4. **Explore Glass Types**:
   - Below the search functionality, explore a table listing all available glass types.
  
## API Usage

The API is TheCocktailDB_API (See the acknowledgements section for specific documentation). We use the API in two specific ways. The first is to retrieve all of the available glasses that you might own and that exist within the cocktail database. The second and vital function is the retrieval of a random cocktail using the glass filter from the database on the API. This is the primary feature of the application.

## Acknowledgments & AI Disclaimer

- This project was primarily generated using ChatGPT by OpenAI, with specific manual edits made to enhance formatting, including setting background colors and creating the available glasses table. ChatGPT primarily created much of the core functionality including the API call, the initial rendering structure, the Axios http call for the reference list, and the API integration.
- Manual edits were by Ian Chen
- The cocktail data is sourced from [TheCocktailDB API](https://www.thecocktaildb.com/api.php).
