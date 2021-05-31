import { useEffect, useState } from "react";
import { useParams } from "react-router";
import recipe from "../../api/recipe";
import Spinner from "../Spinner";
import CardRecipes from "./CardRecipes";
import "./RecipesContent.css";

const RecipesContent = () => {
  const [results, setResults] = useState([]);

  const { valueId } = useParams();

  useEffect(() => {
    getData(valueId);
  }, [valueId]);

  const getData = async (search) => {
    const results = await recipe.get("complexSearch", {
      params: {
        query: search,
        number: 30,
      },
    });
    setResults(results.data.results);
  };

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
