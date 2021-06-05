import { useContext } from "react";
import { RecipesContext } from "../../providers/SearchResults";
import NewRecipesContent from "./NewRecipesContent.component";

const SearchRecipes = () => {
  const newResults = useContext(RecipesContext);
  const newRecipe = newResults.results;
  return (
    <div className="pb-5">
      <NewRecipesContent newResults={newRecipe} />
    </div>
  );
};

export default SearchRecipes;
