import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'

import { authorizeProvider } from '../provider/apiRequests'

import { OnboardingContainer } from '../provider/containers'

import Button from '../components/Button'
import Dropdown from '../components/Dropdown'

import PeopleReading from '../assets/img/people-reading.svg'

/*
  Onboarding steps:
    1.1. User picks a service to connect or 
    2.1. Adds an item manually

    -- 1.1. User picks a service to connect
    1.2. User gets forwared for OAuth w/ two outcomes:
      a) they approve release of personal data -> yay, go to step 3
      b) they don't approve or there is an error -> ah, please try again step 2

    1.3. Show loading progress while we make a request to the back-end to fetch
         user's reading library from the chosen service and calculate their stats
         When finished loading, save their reading library and statistics in the app's
         state and show `All Set` last onboarding screen
         When user clicks `Done`, populate the dashboard with their statistics

    -- 2.1 Manually adding an item
    2.2. Render the form for adding item properties
    2.3. Do a form validation for the entered fields, send it to the back-end, and
         save it in the app's state
    2.4. Populate the dashboard with statistics and account for empty fields since only 1 item
         would be entered at this time

*/

const handleNextStep = async (service) => {
  const OAuthRedirectUrl = await authorizeProvider(service)
  var win = window.open(OAuthRedirectUrl, '_blank');
}

export default function Onboarding() {
  const { addToast } = useToasts()

  const authResult = useLocation().search.replace("?", "")
  const container = OnboardingContainer.useContainer()

  const {
    initOnboarding, setInitOnboarding,
    onboardingStep, setOnboardingStep,
  } = container

  useEffect(() => {
    if (onboardingStep === 2) {
      if (authResult === "authorizedProvider=1") {
        addToast('Authorized Successfully', { appearance: 'success' })
      }
      else {
        addToast('You need to authorize your chosen service', { appearance: 'error' })
        console.log()
      }
    }
   
  }, [authResult])
  console.log("PARAM", authResult)
  

  const connectedServices = ["Pick a service", "Goodreads", "Google Books"]
  // const imgSrc= "https://image.freepik.com/free-vector/online-courses-concept_23-2148514212.jpg"
  // const imgSrc2 = "https://image.freepik.com/free-vector/group-people-reading-borrowing-books_53876-43122.jpg"
  // const imgSrc3 = "https://image.freepik.com/free-vector/happy-sporty-readers-among-books_74855-6518.jpg"

  return (
      <section className="text-gray-700 body-font rounded-lg bg-white shadow-xl mx-32">
        <div className="container mx-auto flex p-10 items-center justify-center flex-col">
          <img className="md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src={PeopleReading} />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">Welcome to Leaf!</h1>
            <h3 className="title-font sm:text-xl text-lg mb-4 font-medium text-gray-600">Let's track your reading activity together</h3>
            <p className="mb-8 leading-relaxed">Pick a service you want to pull your reading data from or add a new item manually</p>
            <div className="flex justify-center">
              <Dropdown options={connectedServices} />
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Add manually</button>
            </div>
          </div>
          <div className="self-end">
            <Button
              color="green"
              onClick={() => handleNextStep("goodreads")}
            >
              Next
            </Button>
          </div>
        </div>
      </section>
  )
}