import { useState } from "react";
import axios from "axios";

const useRecipesAnalizes = () => {
  const [recipeAnalizes, setRecipeAnalizes] = useState([]);

  const API_KEY = "6354f288edd64c04baed9962c2643c24";

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
