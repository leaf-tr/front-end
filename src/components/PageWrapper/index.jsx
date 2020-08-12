import React from 'react'

import { OnboardingContainer } from '../../provider/containers'

import Onboarding from '../../pages/Onboarding'

export default function PageWrapper({ children }) {

  const onboardingContainer = OnboardingContainer.useContainer()

  const {
    initOnboarding, setInitOnboarding,
    setOnboardingStep,
  } = onboardingContainer

  // TO DO: pull this from the state
  const newUser = true

  // check if this is a new user and
  // onboarding hasn't been initialized yet
  if (newUser && !initOnboarding) {
    setInitOnboarding(true)
    setOnboardingStep(1)
  }

  return (
    <div className="mt-10">
      {/* if it's a new user, then
      render onboarding for all pages */}
      { newUser
        ? <Onboarding />
        : {children}
      }
    </div>
  )
}
