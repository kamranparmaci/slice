import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { SearchResults } from "../../providers/SearchResults";

import RecipesContent from "../searchRecipes/RecipesContent";

const Recipes = () => {
  const { getData } = useContext(SearchResults);
  const { valueId } = useParams();

  useEffect(() => {
    getData(valueId);

    return () => {
      getData(valueId);
    };
  });

  return (
    <div className="higher-container">
      <div className="container">
        <h1 className="pt-5">Search Any Recipes</h1>
        <div className="pb-5">
          <RecipesContent />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
