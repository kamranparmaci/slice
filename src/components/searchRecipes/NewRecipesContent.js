import CardRecipes from "./CardRecipes";

const NewRecipesContent = ({ newResults }) => {
  const renderedResults = newResults.map((result) => {
    return <CardRecipes key={result.id} result={result} />;
  });

  return <div className="card-container">{renderedResults}</div>;
};

export default NewRecipesContent;
