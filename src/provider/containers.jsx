/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { createContainer } from 'unstated-next';

// user-related state for the whole app
function userData() {
  let [loggedIn, setLoggedIn] = useState(false)
  let [userData, setUserData] = useState({});

  return {
    loggedIn, setLoggedIn,
    userData, setUserData 
  }
}
export const UserContainer = createContainer(userData)

// onboarding-related state only for new users
function onboardingProgress() {
  let [initOnboarding, setInitOnboarding] = useState(false)
  let [onboardingStep, setOnboardingStep] = useState(1)
  let [onboardingData, setOnboardingData] = useState({})
  let incrementStep = () => setOnboardingStep(onboardingStep + 1)
  let decrementStep = () => setOnboardingStep(onboardingStep - 1)

  return {
    initOnboarding, setInitOnboarding,
    onboardingStep, setOnboardingStep,
    onboardingData, setOnboardingData,
    incrementStep, decrementStep,
  }
}
export const OnboardingContainer = createContainer(onboardingProgress)
