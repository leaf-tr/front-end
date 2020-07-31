import React from 'react'

import FlexBox from '../components/FlexBox'

import CustomBarChart from '../components/Charts/CustomBarChart'
import CustomPieChart from '../components/Charts/CustomPieChart'

const GenresData = [
  { name: 'Historical Fiction', value: 1 },
  { name: 'Scince Fiction', value: 5 },
  { name: 'Fantasy', value: 10 },
  { name: 'Biography', value: 2 },
  { name: 'Poems', value: 2 },
  { name: 'Plays', value: 1 },
];

const FormatsData = [
  { name: 'Audiobook', value: 400 },
  { name: 'Ebook', value: 300 },
  { name: 'Physical Book', value: 300 },
];

export default function Dashboard() {
  return (
    <div className="mt-10">
      {/* <div>Dashboard</div> */}

      <FlexBox className="mb-32 justify-center items-center">
        <CustomPieChart data={GenresData} />
        <CustomPieChart data={FormatsData} />
      </FlexBox>

      
      <CustomBarChart />
      <div className="ml-20">
        Number of books read each month over the past year
      </div>
    </div>
  )
}
