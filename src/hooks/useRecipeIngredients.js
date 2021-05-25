import axios from "axios";
import { useState } from "react";

const useRecipeIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const API_KEY = "6354f288edd64c04baed9962c2643c24";

  const getIngredients = async (id) => {
    const ingredients = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`,
      {
        params: {
          apiKey: API_KEY,
          id: id,
        },
      }
    );
    setIngredients(ingredients.data.ingredients);
  };
  return [ingredients, getIngredients];
};

export default useRecipeIngredients;
