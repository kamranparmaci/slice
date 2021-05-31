// import react, { Component } from "react";
import { useContext, useEffect } from "react";
import { SearchResults } from "../../providers/SearchResults";
import Ingredients from "./Ingredients";
import Equipments from "./Equipments";
import "./RecipeInstructions.css";
import uuid from "react-uuid";
import { useParams } from "react-router";

// class RecipeInstructions extends Component({ rcipeAnalize, match }) {
//   render() {
//     return <div>helllooooooooo</div>;
//   }
// }

const RecipeInstructions = (recipeAnalize) => {
  const { cardId } = useParams();

  const { image, title, summary, instructions, servings } = recipeAnalize;

  const { ingredients, equipments, getRecipes, getIngredients, getEquipments } =
    useContext(SearchResults);

  const renderedIngredients = ingredients.map((ingredient) => {
    return <Ingredients key={uuid()} ingredient={ingredient} />;
  });

  const renderedEquipments = equipments.map((equipment) => {
    return <Equipments key={uuid()} equipment={equipment} />;
  });

  useEffect(() => {
    getRecipes(cardId);
    getIngredients(cardId);
    getEquipments(cardId);

    return () => {
      getRecipes(cardId);
      getIngredients(cardId);
      getEquipments(cardId);
    };
  });

  return (
    <div className="py-5">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p
        className="my-5 summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></p>
      <h3 className="ingredient-title">Ingredients</h3>
      <span className="serving">Servings: {servings}</span>
      <div className="ingredient-container">{renderedIngredients}</div>
      {equipments.length !== 0 ? (
        <div className="mt-5">
          <h3 className="equipment-title">Equipments</h3>
          <div className="equipments-container">{renderedEquipments}</div>
        </div>
      ) : (
        ""
      )}
      <h3 className="mt-5">Instructions</h3>
      <p
        className="instructions"
        dangerouslySetInnerHTML={{ __html: instructions }}
      ></p>
    </div>
  );
};

export default RecipeInstructions;
