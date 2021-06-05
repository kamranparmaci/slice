import RecipesContent from "../searchRecipes/RecipesContent.component";

const Recipes = () => {
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
