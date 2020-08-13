import React from 'react'

import Button from '../../../components/Button'
import Dropdown from '../../../components/Dropdown'

import PeopleReading from '../../../assets/img/people-reading.svg'

export default function One() {

  const servicesOptions = ["Pick a service", "Goodreads", "Google Books"]

  // TO DO: implement picking an option
  // pass the option and data back to the parent
  const handleOptionPick = (option, data = {}) => {
    switch (option) {
      case "dropdown":
        break
      case "button":
        break
      default:
        break
    }
  }

  // TO DO: refactor into components
  return (
    <>
      <img className="md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src={PeopleReading} />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">Welcome to Leaf!</h1>
        <h3 className="title-font sm:text-xl text-lg mb-4 font-medium text-gray-600">Let's track your reading activity together</h3>
        <p className="mb-8 leading-relaxed">Pick a service you want to pull your reading data from or add a new item manually</p>
        <div className="flex justify-center">
          <Dropdown options={servicesOptions} onClick={() => handleOptionPick("dropdown", {service: ''})} />
          <Button color="gray" className="mx-4" onClick={() => handleOptionPick("button")}>Add manually</Button>
        </div>
      </div>
    </>
  )
}