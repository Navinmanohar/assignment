import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function BarCustom({ seriesData }) {
  const data = seriesData.map((value, index) => ({
    name: index === seriesData.length - 1 ? `Above ${index * 100}` : `${index * 100}-${(index + 1) * 100 - 1}`,
    item: value,
  }));

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="item" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
