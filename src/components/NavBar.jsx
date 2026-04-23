import { ChartColumnDecreasing, History, House } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';


const NavBar = () => {
     return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <img src="/logo.png" alt="logo" className="h-8" />

        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-green-900 text-white px-4 py-1.5 rounded-md text-sm"
                : "text-gray-600 hover:text-gray-900 text-sm"
            }
          >
            <div className='flex items-center justify-center'><House/> Home</div>
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              isActive
                ? "bg-green-900 text-white px-4 py-1.5 rounded-md text-sm"
                : "text-gray-600 hover:text-gray-900 text-sm"
            }
          >
           <div className='flex items-center justify-center'><History/> Timeline</div>
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              isActive
                ? "bg-green-900 text-white px-4 py-1.5 rounded-md text-sm"
                : "text-gray-600 hover:text-gray-900 text-sm"
            }
          >
            <div className='flex items-center justify-center'><ChartColumnDecreasing className=''/> Stats</div>
            
          </NavLink>

        </div>

      </div>
    </nav>
  );
};

export default NavBar;