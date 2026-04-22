import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 sm:opacity-[0.97] xxs:h-[12vh] transition-colors duration-300
      ${isDark ? 'bg-night border-b border-jetLight' : 'bg-flashWhite'}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className={`sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain transition-all duration-300 ${isDark ? 'invert' : ''}`}
          />
          <span className={`font-mova font-extrabold uppercase tracking-[2px] sm:text-[22px] text-[18px] transition-colors duration-300
            ${isDark ? 'text-timberWolf' : 'text-eerieBlack'}`}>
            Santhosh
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? 'text-french'
                    : isDark ? 'text-timberWolf' : 'text-eerieBlack'
                } hover:text-taupe text-[21px] font-medium font-mova 
                  uppercase tracking-[3px] cursor-pointer nav-links transition-colors duration-300`}
                onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Dark/Light toggle */}
          <button
            onClick={toggleTheme}
            className={`w-[44px] h-[24px] rounded-full relative transition-colors duration-300 flex items-center
              ${isDark ? 'bg-timberWolf' : 'bg-jetLight'}`}
            aria-label="Toggle dark mode">
            <span
              className={`absolute w-[18px] h-[18px] rounded-full shadow-md transition-transform duration-300
                ${isDark ? 'translate-x-[22px] bg-night' : 'translate-x-[3px] bg-flashWhite'}`}>
              <span className="flex items-center justify-center w-full h-full text-[9px]">
                {isDark ? '🌙' : '☀️'}
              </span>
            </span>
          </button>
        </div>

        {/* Mobile */}
        <div className="sm:hidden flex flex-1 w-full justify-end items-center gap-3">
          {/* Mobile toggle */}
          <button
            onClick={toggleTheme}
            className={`w-[40px] h-[22px] rounded-full relative transition-colors duration-300 flex items-center
              ${isDark ? 'bg-timberWolf' : 'bg-jetLight'}`}
            aria-label="Toggle dark mode">
            <span
              className={`absolute w-[16px] h-[16px] rounded-full shadow-md transition-transform duration-300
                ${isDark ? 'translate-x-[20px] bg-night' : 'translate-x-[3px] bg-flashWhite'}`}>
              <span className="flex items-center justify-center w-full h-full text-[8px]">
                {isDark ? '🌙' : '☀️'}
              </span>
            </span>
          </button>

          {toggle ? (
            <div
              className={`p-6 fixed top-0 left-0 w-full h-[100vh] z-10 menu ${
                toggle ? 'menu-open' : 'menu-close'
              } transition-colors duration-300 ${isDark ? 'bg-night' : 'bg-flashWhite'}`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title
                        ? 'text-french'
                        : isDark ? 'text-timberWolf' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
