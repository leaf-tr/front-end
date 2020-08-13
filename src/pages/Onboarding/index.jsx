import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'

import { authorizeProvider } from '../../provider/apiRequests'

import { OnboardingContainer } from '../../provider/containers'

import Button from '../../components/Button'
import Dropdown from '../../components/Dropdown'

import One from './Steps/One'


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
    2.4. Populate the dashboard with statistics and watch out for empty fields since only 1 item
         would be entered at this time

*/

// const handleNextStep = async (service, onboardingContainer, stepContents) => {

//   const {
//     initOnboarding, setInitOnboarding,
//     onboardingStep, setOnboardingStep,
//   } = onboardingContainer

//   // increment step

//   const OAuthRedirect = await authorizeProvider(service)
//   if (OAuthRedirect === undefined) {

//   }
//   try {
//     let OAuthRedirectUrl = new URL(OAuthRedirect)
//   } catch (e) {
//     console.log("invalid url", OAuthRedirect)
//   }
//   // var win = window.open(OAuthRedirectUrl, '_blank');
// }

export default function Onboarding() {
  const { addToast } = useToasts()

  const authResult = useLocation().search.replace("?", "")
  const onboardingContainer = OnboardingContainer.useContainer()

  const {
    initOnboarding, setInitOnboarding,
    onboardingStep, setOnboardingStep,
    incrementStep, 
  } = onboardingContainer

  // TO DO: pull the service value from the state
  const service = "goodreads"
  const [stepContents, setStepContents] = useState(<></>)

  const configureStepContents = async (onboardingStep) => {
    // different behavior depending on step number
    switch (onboardingStep) {
      // initialize onboarding
      // picking a service or adding an item manually
      case 1:
        setStepContents(<One />)
        break
      case 2:
        addToast('You will be re-directed in a moment', { appearance: 'success' })
        const OAuthRedirect = await authorizeProvider(service)
        try {
          let OAuthRedirectUrl = new URL(OAuthRedirect)
        } catch (e) {
          console.log("invalid url", OAuthRedirect)
        }
        if (authResult === "authorizedProvider=1") {
          addToast('Authorized Successfully', { appearance: 'success' })
        } else {
          addToast('There was an error, please try again', { appearance: 'error' })
        }
        break
      default:
        return ""
    }
  }
  
  useEffect(() => {
    console.log("STEP", onboardingStep)
    
    configureStepContents(onboardingStep)
    // if (onboardingStep === 2) {
    //   if (authResult === "authorizedProvider=1") {
    //     addToast('Authorized Successfully', { appearance: 'success' })
    //   }
    //   else {
    //     addToast('You need to authorize your chosen service', { appearance: 'error' })
    //     console.log()
    //   }
    // }
  }, [onboardingStep])


  return (
      <section className="text-gray-700 body-font rounded-lg bg-white shadow-xl mx-32">
        <div className="container mx-auto flex p-10 items-center justify-center flex-col">
          {stepContents}
          <div className="self-end">
            <Button
              color="green"
              onClick={() => incrementStep()}
            >
              Next
            </Button>
          </div>
        </div>
      </section>
  )
}