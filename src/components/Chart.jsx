import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  handleDataSet,
  handleWeekData,
  isDataserEqual,
} from "../api/dataManipulation";
import "./style/index.scss";
export const Chart = ({ weatherValue }) => {
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([{}]);
  const [dataToChart, setDataToChart] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (weatherValue) {
      const allData = handleWeekData(weatherValue);
      if (labels.length === 0 || labels[0] !== allData["arrDataString"][0]) {
        setLabels(() => allData["arrDataString"]);
      }
      const dataSetHandled = handleDataSet(allData);
      isDataserEqual(datasets, dataSetHandled);
      if (!isDataserEqual(datasets, dataSetHandled)) {
        setDatasets(dataSetHandled);
      }
      setDataToChart({ labels, datasets });
    }
  }, [labels, datasets, weatherValue]);
  return (
    <div className="chart">
      <Line data={dataToChart} />
    </div>
  );
};
