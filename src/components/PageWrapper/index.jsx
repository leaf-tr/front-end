import React from 'react'

import { OnboardingContainer } from '../../provider/containers'

import Onboarding from '../../pages/Onboarding/'

export default function PageWrapper({ children }) {

  const { initOnboarding } = OnboardingContainer.useContainer()

  // TO DO: pull this from the state
  const newUser = true

  return (
    <div className="mt-10">
      {/* if it's a new user, then
      render onboarding for all pages */}
      { newUser && !initOnboarding
        ? <Onboarding />
        : {children}
      }
    </div>
  )
}
