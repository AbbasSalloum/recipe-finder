# Recipe Finder Web App

The Recipe Finder Web App is a ReactJS application that allows users to search for recipes using a free public API. The app features responsive design, localization support, and state management using Redux. It is built with Material UI for UI components and Tailwind CSS for additional styling.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Search Recipes**: Users can search for recipes using a search bar.
- **Recipe List**: Displays a list of recipes based on the search query.
- **Recipe Details**: Each recipe card shows key information about the recipe.
- **State Management**: The app uses Redux to manage state.
- **Localization**: Supports multiple languages using `react-i18next`.
- **Responsive Design**: The app is fully responsive and works on mobile devices.
- **Material UI**: UI components are built with Material UI for a modern look and feel.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/recipe-finder-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd recipe-finder-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root of the project and add your API key and endpoint:

   ```env
   REACT_APP_API_URL=https://api.edamam.com/search
   REACT_APP_API_KEY=your_api_key
   REACT_APP_API_ID=your_app_id
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a search query (e.g., "chicken") in the search bar and press Enter.

4. Browse through the list of recipes that appear based on your search.
