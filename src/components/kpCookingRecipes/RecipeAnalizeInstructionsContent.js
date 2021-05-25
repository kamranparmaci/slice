import { useContext } from "react";

import { SearchResults } from "../../providers/SearchResults";
import RecipeInstructions from "./RecipeInstructions";

const RecipeAnalizeInstructionsContent = () => {
  const { recipeAnalizes } = useContext(SearchResults);

  return (
    <>
      <RecipeInstructions {...recipeAnalizes} />
    </>
  );
};

export default RecipeAnalizeInstructionsContent;
