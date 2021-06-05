import { useEffect, useState } from "react";
import Ingredients from "./Ingredients.component";
import Equipments from "./Equipments.component";
import "./RecipeInstructions.css";
import uuid from "react-uuid";
import { useParams } from "react-router";
import spoon from "../../api/spoon";

const RecipeInstructions = () => {
  const [informations, setRecipeAnalizes] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const { cardId } = useParams();

  useEffect(() => {
    getRecipes(cardId);
    getIngredients(cardId);
    getEquipments(cardId);
  }, [cardId]);

  const getRecipes = async (cardId) => {
    const informations = await spoon.get(`${cardId}/information`, {
      params: {
        id: cardId,
      },
    });
    setRecipeAnalizes(informations.data);
  };

  const getIngredients = async (cardId) => {
    const ingredients = await spoon.get(`${cardId}/ingredientWidget.json`, {
      params: {
        id: cardId,
      },
    });
    setIngredients(ingredients.data.ingredients);
  };

  const getEquipments = async (cardId) => {
    const equipments = await spoon.get(`${cardId}/equipmentWidget.json`, {
      params: {
        id: cardId,
      },
    });
    setEquipments(equipments.data.equipment);
  };

  const { image, title, summary, instructions, servings } = informations;

  const renderedIngredients = ingredients.map((ingredient) => {
    return <Ingredients key={uuid()} ingredient={ingredient} />;
  });

  const renderedEquipments = equipments.map((equipment) => {
    return <Equipments key={uuid()} equipment={equipment} />;
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
