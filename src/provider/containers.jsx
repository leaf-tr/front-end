/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { createContainer } from 'unstated-next';

function userData() {
  let [loggedIn, setLoggedIn] = useState(false)
  let [userData, setUserData] = useState({});

  return {
    loggedIn, setLoggedIn,
    userData, setUserData 
  }
}

export const UserContainer = createContainer(userData)

function onboardingProgress() {
  let [initOnboarding, setInitOnboarding] = useState(false)
  let [onboardingStep, setOnboardingStep] = useState(0)
  // let [userData, setUserData] = useState({});

  return {
    initOnboarding, setInitOnboarding,
    onboardingStep, setOnboardingStep,
  }
}

export const OnboardingContainer = createContainer(onboardingProgress)
