import { useEffect, useState } from "react";
import "./LineChart.css";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData && historicalData.prices) {
      historicalData.prices.forEach((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, 5)}`, item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <div className="chart-container">
      <Chart 
        chartType="LineChart"
        data={data}
        width="100%"
        height="400px"
        options={{
          hAxis: {
            title: 'Date',
          },
          vAxis: {
            title: 'Price',
          },
        }}
      />
    </div>
  );
}

export default LineChart;
