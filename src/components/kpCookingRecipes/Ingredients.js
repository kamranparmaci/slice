import "./Ingredients.css";

const Ingredients = ({ ingredient }) => {
  const { image, name, amount } = ingredient;

  const { metric } = amount;

  const { value, unit } = metric;

  return (
    <div className="ingredients">
      <div>
        <span className="measures">{value} </span>
        <span className="measures">{unit}</span>
      </div>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
        alt="Ingredient"
      />
      <span>{name}</span>
    </div>
  );
};

export default Ingredients;
