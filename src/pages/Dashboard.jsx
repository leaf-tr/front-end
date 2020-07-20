import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button'

export default function Dashboard() {
  return (
    <div className="max-w-md">
      <div>Dashboard</div>
      <div className="my-4">
        <Link to="/blue">
          <Button color="green">
            {/* <Button color="green" onClick={() => { console.log("button was clicked!") }}> */}
            <span>Blue button</span>
          </Button>
        </Link>
      </div>
     
      <div className="my-4">
        
        <Button color="orange" size="lg" onClick={() => { console.log("orange button was clicked!") }} outline>
          <span>Blue outline button</span>
        </Button>
      </div>
    </div>
  )
}
