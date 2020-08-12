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

      <FlexBox className="mb-20 justify-center items-center">
        <div className="p-4 mr-8 rounded-lg bg-white shadow-xl">
          <CustomPieChart data={GenresData} />
          <FlexBox className="items-center justify-center">
            Book Genre distribution
          </FlexBox>
        </div>
        <div className="p-4 rounded-lg bg-white shadow-xl">
          <CustomPieChart data={FormatsData} />
          <FlexBox className="items-center justify-center">
            Book Format distribution
          </FlexBox>
        </div>
      </FlexBox>

      <div className="py-8 px-2 mx-20 rounded-lg bg-white shadow-xl">
        <CustomBarChart />
        <FlexBox className="items-center justify-center">
          Number of books read each month over the past year
        </FlexBox>
      </div>
    </div>
  )
}
