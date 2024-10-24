# Weather-Based Taylor Swift Playlist Generator
## Project Description
This project creates a unique Taylor Swift playlist based on the current weather in a specified city. It combines data from two APIs:
1. OpenWeatherMap API: To fetch current weather data for a given city.
2. Spotify API: To access Taylor Swift's discography and create personalized playlists.
The application determines a "mood" based on the weather conditions and selects Taylor Swift songs that match this mood. It then creates a Spotify playlist with these songs.
## Features
- Fetches real-time weather data for any city
- Determines a mood based on weather conditions
- Selects Taylor Swift songs that match the mood
- Creates a Spotify playlist with the selected songs
- Provides links to listen to the created playlist
## APIs Used
1. **OpenWeatherMap API**: Chosen for its comprehensive and accurate weather data. It allows us to get current weather conditions for any city worldwide.
2. **Spotify API**: Selected for its extensive music database and playlist creation capabilities. It provides access to Taylor Swift's complete discography and allows for programmatic playlist creation.
## Setup Instructions
### 1. Google Colab Setup
- Open the provided Google Colab notebook.
### 2. API Keys Setup
#### OpenWeatherMap API
1. Go to [OpenWeatherMap](https://openweathermap.org/) and sign up for a free account.
2. Once logged in, go to your API keys section and copy your API key.
#### Spotify API
1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and log in or create an account.
2. Click "Create An App" and fill in the app details.
3. In your app's settings, add `https://example.com/callback` as a Redirect URI.
4. Note down the Client ID and Client Secret.
### 3. Adding Secrets to Google Colab
1. In your Google Colab notebook, click on the folder icon on the left sidebar.
2. Click on the "Secret" tab (key icon).
3. Add the following secrets:
   - `WEATHER_API_KEY`: Your OpenWeatherMap API key
   - `SPOTIFY_CLIENT_ID`: Your Spotify Client ID
   - `SPOTIFY_CLIENT_SECRET`: Your Spotify Client Secret
## Usage Instructions
1. Run the first code cell to install required libraries:
   ```
   !pip install requests spotipy
   ```
2. Run the main code cell containing the entire script.
3. When prompted, enter a city name.
4. The script will display a Spotify authorization URL. Open this URL in a new tab.
5. Log in to Spotify and authorize the application.
6. After authorization, you'll be redirected to a page (which may show an error). Copy the entire URL of this page.
7. Return to the Colab notebook and paste the copied URL when prompted.
8. The script will create the playlist and provide a link to it on Spotify.
## Error Handling and Rate Limits
- The script includes error handling for API requests and authentication processes.
- It respects the rate limits of both APIs to ensure smooth operation.
## Future Improvements
- Implement caching for weather data to reduce API calls
- Expand the mood-matching algorithm for more nuanced playlist creation
- Add support for other artists or genres
## Contributors
- Shayan Ahmad
- Ian Chen
- Jessica Yu
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
