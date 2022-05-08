import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <ul className="flex">
      <li className="mr-6">
        <Link to="/" className="text-blue-500 hover:text-blue-800">
          Home
        </Link>
      </li>
      <li className="mr-6">
        <Link to="/about" className="text-blue-500 hover:text-blue-800">
          About
        </Link>
      </li>
    </ul>
  );
};

export default Header;
