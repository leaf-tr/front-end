import React from 'react'

import Login from './Login'

export default function Landing() {
  return (
    <div>
      <div>
        <Header>
          <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Header>
      </div>

      <div>
        <Hero title="" caption="" imgSrc="">
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Sign Up</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Login</button>
          </div>
        </Hero>
        <Login />
      </div>

      <div>
        <Content title="" subtitle="" caption="" imgSrc=""/>
      </div>

      <div>
        <Hero2 title="Connect APIs" caption="" imgSrc=""/>
      </div>

      <div>
        <Hero3 title="Track Books" caption="" imgSrc=""/>
      </div>

      <div>
        <Hero4 title="Dashboard" caption="" imgSrc=""/>
      </div>

      <div>
        <Team title="" subtitle="" caption=""/>
      </div>

      <div>
        <Footer imgSrc=""/>
      </div>
      
    </div>
  )
}

