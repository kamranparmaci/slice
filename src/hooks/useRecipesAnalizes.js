import { useState } from "react";
import axios from "axios";

const useRecipesAnalizes = () => {
  const [recipeAnalizes, setRecipeAnalizes] = useState([]);

  const API_KEY = "e67d535eb95c4b458c8a6f7f348ebec4";

  const getRecipes = async (id) => {
    const recipe = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
      {
        params: {
          apiKey: API_KEY,
          id: id,
        },
      }
    );

    setRecipeAnalizes(recipe.data);
  };

  return [recipeAnalizes, getRecipes];
};

export default useRecipesAnalizes;
