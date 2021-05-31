import axios from "axios";
import { useState } from "react";

const useRecipeIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const API_KEY = "e67d535eb95c4b458c8a6f7f348ebec4";

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
