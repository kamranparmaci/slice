import axios from "axios";
import { useState } from "react";

const useRecipeEquipments = () => {
  const [equipments, setEquipments] = useState([]);

  const API_KEY = "8dc8773d1eab476ab6308ded74d498d2";

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
