import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './Menu.scss';

const Welcome = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickX = (e) => {
    if (isMenuOpen && !$(e.target).closest('.js-nav-menu').length) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickX);
    return () => {
      document.removeEventListener('click', handleClickX);
    };
  });

  return (
    <div
      className={`navigation-menu js-nav-menu ${
        isMenuOpen ? 'navigation-menu--open' : ''
      }`}
    >
      <div
        className="navigation-menu__toggle js-nav-menu-toggle"
        onClick={toggleMenu}
      >
        <span className="navigation-menu__bars"></span>
      </div>
      <ul className="menu-list">
        <h1 style={{ color: '#81ecec' }}>Welcome!</h1>
        <Link to="/dashboard">
          {' '}
          <li className="menu-list__item">Dashboard</li>
        </Link>

        <Link to="/missions">
          {' '}
          <li className="menu-list__item">
            {' '}
            &emsp;&emsp;&emsp;Mission Generator
          </li>
        </Link>
        <Link to="/armory">
          {' '}
          <li className="menu-list__item">Armory</li>
        </Link>
        <Link to="/garage">
          {' '}
          <li className="menu-list__item">Garage</li>
        </Link>
        <Link to="/community">
          {' '}
          <li className="menu-list__item">Community Operations</li>
        </Link>

        <Link to="/about">
          {' '}
          <li className="menu-list__item">About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Welcome;
