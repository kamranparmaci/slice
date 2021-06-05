import { useEffect, useState } from "react";
import { useParams } from "react-router";
import spoon from "../../api/spoon";
import Spinner from "../spinner/Spinner.component";
import CardRecipes from "./CardRecipes.component";
import "./RecipesContent.css";

const RecipesContent = () => {
  const [results, setResults] = useState([]);

  const { valueId } = useParams();
  console.log(valueId);

  useEffect(() => {
    const getData = async (valueId) => {
      const results = await spoon.get("complexSearch", {
        params: {
          query: valueId,
          number: 30,
        },
      });
      setResults(results.data.results);
    };
    getData(valueId);
  }, [valueId]);

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
