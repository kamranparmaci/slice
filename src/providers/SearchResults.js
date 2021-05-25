import { useState } from "react";
import { createContext } from "react";
import useRecipes from "../hooks/useRecipes";
import useRecipesAnalizes from "../hooks/useRecipesAnalizes";
import DATA from "../data";
import useRecipeIngredients from "../hooks/useRecipeIngredients";
import useRecipeEquipments from "../hooks/useRecipeEquipments";

export const RecipesContext = createContext(DATA);

export const SearchResults = createContext({
  search: "",
  onHandleChange: () => {},
  getData: () => {},
  results: [],
  recipeAnalizes: [],
  ingredients: [],
  equipments: [],
  getRecipes: () => {},
  getIngredients: () => {},
  getEquipments: () => {},
});

const SearchResultsProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [results, getData] = useRecipes([]);
  const [recipeAnalizes, getRecipes] = useRecipesAnalizes([]);
  const [ingredients, getIngredients] = useRecipeIngredients([]);
  const [equipments, getEquipments] = useRecipeEquipments([]);

  const onHandleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchResults.Provider
      value={{
        search,
        onHandleChange,
        getData,
        results,
        recipeAnalizes,
        ingredients,
        equipments,
        getRecipes,
        getIngredients,
        getEquipments,
      }}
    >
      {children}
    </SearchResults.Provider>
  );
};

export default SearchResultsProvider;
