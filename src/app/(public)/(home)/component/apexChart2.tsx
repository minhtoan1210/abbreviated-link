"use client"
import React, { useState } from "react";
import dynamic from "next/dynamic";

const dates = [
  [1640995200000, 1000000], // timestamp, value
  [1641081600000, 2000000],
  [1641081600000, 2000000],
];

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexChart2 = () => {
  const [series, setSeries] = useState([
    {
      name: "XYZ MOTORS",
      data: dates,
    },
  ]);

  const options: any = {
    chart: {
      type: "area",
      stacked: false,
      height: 180,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      title: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: (val: number) => (val / 1000000).toFixed(0),
      },
    },
  };

  return (
    <div>
      <div id="chart2">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={180}
          width={200}
        />
      </div>
    </div>
  );
};

export default ApexChart2;
