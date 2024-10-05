import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Importáljuk a hamburger ikont


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Állapot a menü nyitottságához

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Menü nyitása/zárása
  };

  return (
    <div className="sidebar">
      {/* Hamburger ikon mobil nézethez */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* A navigációs menü, amely a hamburger ikonra kattintásra jelenik meg mobilon */}
      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Főoldal</Link>
          </li>
          <li>
            <Link to="/wordlist" onClick={toggleMenu}>Szókártyák</Link>
          </li>
          <li>
            <Link to="/addword" onClick={toggleMenu}>Szókártya hozzáadása</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
