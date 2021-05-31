import axios from "axios";
import { useState } from "react";

const useRecipeEquipments = () => {
  const [equipments, setEquipments] = useState([]);

  const API_KEY = "e67d535eb95c4b458c8a6f7f348ebec4";

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
