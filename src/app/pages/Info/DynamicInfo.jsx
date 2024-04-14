import { useState, useEffect } from "react";
import Info from "./Info";
import { useParams } from "react-router-dom";
import data from "../../data/cityData.json";

export default function DynamicInfo() {
  const [infoData, setInfoData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const routeParams = window.location.pathname.split("/");
    const routeId = routeParams[routeParams.length - 1];
    fetchInfoData(routeId);
  }, [id]);

  const fetchInfoData = async (id) => {
    try {
      const infoEntry = data.find((entry) => entry.key === parseInt(id, 10));
      setInfoData(infoEntry);
    } catch (error) {
      console.error("Error fetching info data:", error);
    }
  };

  return infoData ? <Info data={infoData} /> : null;
}
