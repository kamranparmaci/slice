import { useContext } from "react";
import { RecipesContext } from "../../providers/SearchResults";
import Header from "../header/Header";
import NewRecipesContent from "../searchRecipes/NewRecipesContent";
import SearchRecipes from "../searchRecipes/SearchRecipes";
import "./Home.css";

const Home = () => {
  const newResults = useContext(RecipesContext);

  const newRecipe = newResults.results.filter((result, idx) => idx < 2);

  return (
    <>
      <Header />
      <div className="higher-container pt-5">
        <div className="container">
          <h2>Recipe of the Day</h2>
          <div className="row">
            <div className="col">
              <NewRecipesContent newResults={newRecipe} />
            </div>
          </div>
          <br />
          <br />
          <h2 className="pt-5">New Recipes</h2>
          <SearchRecipes />
        </div>
      </div>
    </>
  );
};

export default Home;
