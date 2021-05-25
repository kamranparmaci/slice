import { useContext } from "react";
import { SearchResults } from "../../providers/SearchResults";
import Spinner from "../Spinner";
import CardRecipes from "./CardRecipes";
import "./RecipesContent.css";

const RecipesContent = () => {
  const { results } = useContext(SearchResults);

  const renderedResults = results.map((result) => {
    return <CardRecipes key={result.id} result={result} />;
  });

  return results.length === 0 ? (
    <Spinner />
  ) : (
    <div className="card-container">{renderedResults}</div>
  );
};

export default RecipesContent;
