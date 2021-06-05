import { useHistory } from "react-router-dom";

import "./CardRecipes.css";

const CardRecipes = ({ result }) => {
  const { title, image, sourceName, id } = result;

  let history = useHistory();

  return (
    <div className="row">
      <div className="col-12">
        <div
          className="card text-dark"
          onClick={() => history.push(`kpCookingRecipes/${id}`)}
        >
          <img className="card-img-top" src={image} alt={sourceName} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipes;
