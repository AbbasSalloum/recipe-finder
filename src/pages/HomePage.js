import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import { setRecipes } from './recipesSlice';  // Action to update recipes

const HomePage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.items);  // Accessing recipes from Redux store

  const handleSearch = (searchResults) => {
    dispatch(setRecipes(searchResults));  // Dispatching action to update recipes in Redux store
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;
