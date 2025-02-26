"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexChart1 = () => {
  const chartOptions: any = {
    chart: {
      height: 180,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    title: {
      text: "Link Analytics",
      floating: true,
      offsetY: -1,
      align: "center",
      style: {
        color: "#838896",
      },
    },
  };

  const series = [
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0],
    },
  ];

  return (
    <div>
      <div id="chart1">
        <ReactApexChart options={chartOptions} series={series} type="bar" height={180} width={200} />
      </div>
    </div>
  );
};

export default ApexChart1;
