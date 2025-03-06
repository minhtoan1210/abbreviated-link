'use client'
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options:any = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Product Trends by Month",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
  yaxis: {
    min: 0,
    max: 1,
  },
};

export default function CuttlyChart() {
  const [state, setState] = useState({
    series: [
      {
        name: "Desktops",
        data: [2, 5, 7, 9, 10, 3, 6, 8, 4],
      },
    ],
  });

  return (
    <>
      <div>
        <div id="chart">
          <ReactApexChart
            options={options}
            series={state.series}
            type="line"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </>
  );
}
