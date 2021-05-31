import axios from "axios";
import { useState } from "react";

const useRecipeIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const API_KEY = "8dc8773d1eab476ab6308ded74d498d2";

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
