import { useState, useEffect } from "react";
import Axios from "axios";

const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const response = await Axios.get("projects.json");

    setData(response.data.data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return [data, loading];
};

export { useData };
