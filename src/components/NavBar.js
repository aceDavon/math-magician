import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const NavItems = [
    {
      id: 1,
      label: 'Home',
      Path: '/',
    },
    {
      id: 2,
      label: 'Calculator',
      Path: 'calculator',
    },
    {
      id: 3,
      label: 'Quotes',
      Path: 'quotes',
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between px-12 py-5 items-center shadow shadow-gray-100 bg-transparent bg-none z-50">
      <div className="text-4xl">
        <Link to="/" className="text-red-500">Math Magicians</Link>
      </div>
      <ul className="flex gap-4 items-center">
        {NavItems.map((link) => (
          <li key={link.id} className="mr-8">
            <NavLink
              to={link.Path}
              className={({ isActive }) => (isActive ? 'bg-white p-4 rounded-lg text-red-500' : 'text-white')}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
