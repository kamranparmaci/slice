import { useState } from "react";
import axios from "axios";

const useRecipes = () => {
  const [results, setResults] = useState([]);

  const API_KEY = "8dc8773d1eab476ab6308ded74d498d2";

  // e67d535eb95c4b458c8a6f7f348ebec4

  // 6354f288edd64c04baed9962c2643c24

  const getData = async (search) => {
    const results = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        params: {
          apiKey: API_KEY,
          query: search,
          instructionsRequired: true,
          number: 30,
        },
      }
    );
    setResults(results.data.results);
  };

  return [results, getData];
};

export default useRecipes;
