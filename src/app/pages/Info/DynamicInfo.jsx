import { useState, useEffect } from "react";
import Info from "./Info";
import data from "../../data/cityData.json";

export default function DynamicInfo() {
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    const routeParams = window.location.pathname.split("/");
    console.log(routeParams);
    const routeId = routeParams[routeParams.length - 1];
    console.log(routeId);
    fetchInfoData(routeId);
  }, []);

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
