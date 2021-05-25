import "./Equipments.css";

const Equipments = ({ equipment }) => {
  return (
    <div className="equipments">
      <img
        className="img"
        src={`https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`}
        alt="Equipment"
      />
      <span>{equipment.name}</span>
    </div>
  );
};

export default Equipments;
