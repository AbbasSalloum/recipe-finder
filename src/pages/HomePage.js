import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/slices/recipeSlice';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';

const HomePage = () => {
  const dispatch = useDispatch();

  // Extract recipes, status, and error from the Redux store
  const { recipes, status, error } = useSelector((state) => state.recipes);

  // Handle the search action
  const handleSearch = (query) => {
    dispatch(fetchRecipes(query));  // Dispatches the action to fetch recipes based on user query
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} /> {/* Search bar component */}
      
      {/* Conditional rendering based on API call status */}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && <RecipeList recipes={recipes} />} {/* Renders the recipes */}
    </div>
  );
};

export default HomePage;
