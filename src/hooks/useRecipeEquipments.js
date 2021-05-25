import axios from "axios";
import { useState } from "react";

const useRecipeEquipments = () => {
  const [equipments, setEquipments] = useState([]);

  const API_KEY = "6354f288edd64c04baed9962c2643c24";

  const getEquipments = async (id) => {
    const equipments = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/equipmentWidget.json`,
      {
        params: {
          apiKey: API_KEY,
          id: id,
        },
      }
    );
    setEquipments(equipments.data.equipment);
  };
  return [equipments, getEquipments];
};

export default useRecipeEquipments;
