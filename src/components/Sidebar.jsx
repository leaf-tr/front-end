import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import {
  BookOpen,
  Clock,
  TrendingUp,
} from 'react-feather';

import Button from './Button';

export default function Sidebar() {

  let sidebarItemClass = "flex items-center text-lightGreen-600 opacity-75 hover:opacity-100 py-4 pl-6"
  let activeSidebarItemClass = "bg-lightGreen-500 opacity-100"

  return (
    <aside className="relative w-64 bg-white shadow-xl hidden sm:block">

      <div className="pt-3">
        <div className="flex items-center justify-center flex-shrink-0">
          <img
            alt="Leaf logo"
            className="h-12 w-12 mr-2"
            src="https://image.flaticon.com/icons/svg/3095/3095108.svg"
          />
          <span className="font-semibold text-black text-xl tracking-tight">Leaf</span>
        </div>
      </div>
          
      <nav className="pt-24 text-base font-semibold">
        <NavLink to={"/dashboard"} className={sidebarItemClass} activeStyle={{color: "white"}} activeClassName={activeSidebarItemClass}>
          <TrendingUp />
          <span className="ml-4">Dashboard</span>
        </NavLink>
        <NavLink to={"/reading-library"} className={sidebarItemClass} activeStyle={{color: "white"}} activeClassName={activeSidebarItemClass}>
          <BookOpen />
          <span className="ml-4">Reading Library</span>
        </NavLink>
        <ul className="ml-16 text-lightGreen-500">
          <Link to={"/reading-library/favorites"}>
            <li className="opacity-75 hover:opacity-100">
              Favorites
            </li>
          </Link>

          <Link to={"/reading-library/to-be-read"}>
            <li className="opacity-75 hover:opacity-100">
              To be read
            </li>
          </Link>
        </ul>
        <NavLink to={"/timeline"} className={sidebarItemClass} activeStyle={{color: "white"}} activeClassName={activeSidebarItemClass}>
          <Clock />
          <span className="ml-4">Timeline</span>
        </NavLink>
      </nav>

      <div style={{ position: 'absolute', bottom: '5%' }}>
        <NavLink to={"/add-new-item"} className={sidebarItemClass}>
          <Button
            color="lightGreen"
            onClick={() => { console.log("add new item") }}
            outline
          >
            Add new item
          </Button>
        </NavLink>

        {/* <ToggleButton> */}
        <div className={sidebarItemClass} >
          <span className="mr-2">Dark Mode</span>
          <Button
            color="gray"
            onClick={() => { console.log("add new item") }}
            outline
          >
            
          </Button>
        </div>
        
      </div>

    </aside>
  )
}