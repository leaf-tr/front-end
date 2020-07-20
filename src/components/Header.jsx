import React from 'react';

export default function Header() {
  return (
    <>
      {/* <!-- Desktop Header --> */}
      <header className="w-full bg-white items-center py-4 px-6 hidden rounded-b-md shadow-xl sm:flex">
        <div className="w-1/2"></div>
        <div className="relative w-1/2 flex justify-end items-center">
          <button className="relative z-10 w-8 h-8 rounded-full overflow-hidden">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="img profile" />
          </button>
          <span className="ml-4">BartleBy547</span>
          {/* <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
            <a href="#" className="block px-4 py-2 account-link hover:text-primary">Account</a>
            <a href="#" className="block px-4 py-2 account-link hover:text-primary">Support</a>
            <a href="#" className="block px-4 py-2 account-link hover:text-primary">Sign Out</a>
          </div> */}
        </div>
      </header>

      {/* <!-- Mobile Header & Nav --> */}
      {/* <header className="w-full bg-white py-5 px-6 sm:hidden">
        <div className="flex items-center justify-between">
            <a href="index.html" className="text-primary text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
            <button className="text-primary text-3xl focus:outline-none">
                <i className="fas fa-bars"></i>
                <i className="fas fa-times"></i>
            </button>
        </div>

        {/* <!-- Dropdown Nav --> 
        <nav className="flex flex-col pt-4">
          <a href="index.html" className="flex items-center active-nav-link text-primary py-2 pl-4 nav-item">
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
        </nav>
          
      </header> */}
    
    </>
  )
}