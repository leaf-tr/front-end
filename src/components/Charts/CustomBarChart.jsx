import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function CustomBarChart() {

  const data = [
    {
      name: 'Jan', pv: 0,
    },
    {
      name: 'Feb', pv: 1,
    },
    {
      name: 'Mar', pv: 5,
    },
    {
      name: 'Apr', pv: 1,
    },
    {
      name: 'May', pv: 0,
    },
    {
      name: 'Jun', pv: 0,
    },
    {
      name: 'Jul', pv: 1,
    },
    {
      name: 'Aug', pv: 2,
    },
    {
      name: 'Sep', pv: 1,
    },
    {
      name: 'Oct', pv: 3,
    },
    {
      name: 'Nov', pv: 0,
    },
    {
      name: 'Dec', pv: 1,
    },
  ];
  
  return (
    <div>
      <BarChart width={900} height={250} data={data} barCategoryGap={'10%'} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    </div>
  )
}