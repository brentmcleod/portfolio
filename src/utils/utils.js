import axios from "axios";

export const loadData = async () => {
  try {
    const response = await axios.get("../projects.json");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
