import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiedPiperAlt } from '@fortawesome/free-brands-svg-icons';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SignInPopup from './Signin';
import LoginPopup from './Login';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Navbar({ setSearch }) {
  const [style, setStyle] = useState('hidden'); // For mobile menu visibility
  const [showPopup, setShowPopup] = useState(false); // For Signin popup
  const [showLoginPopup, setShowLoginPopup] = useState(false); // For Login popup
  const [users, setUsers] = useState([]); // Maintain the users array as state
  const [loggedIn, setLoggedIn] = useState(false); // Track login status

  // Load users from localStorage on component mount
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
    const loggedInStatus = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedInStatus) {
      setLoggedIn(true);
    }
  }, []);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    toast.success('Logged out successfully!');
    setLoggedIn(false); // Set loggedIn to false
  };

  return (
    <div className="main bg-gray-950">
      <nav>
        <div className="front">
          {/* Logo */}
          <div className="logo">
            <FontAwesomeIcon className="logo" icon={faPiedPiperAlt} />
          </div>
          {/* Search Bar */}
          <div className="search" >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-logo" />
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)} // Update search query in parent component
              placeholder="Search.."
              className="search-input"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="index flex gap-6">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/">Latest</Link>
          </li>
          {loggedIn ? (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <button
                  onClick={toggleLoginPopup}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={togglePopup}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  Signin
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu */}
        <div
          className="three"
          onClick={() => setStyle(style === 'hidden' ? 'block' : 'hidden')}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>

      {/* Mobile Menu Links */}
      <div className={`menubar md:flex-none ${style}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {loggedIn ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <button onClick={toggleLoginPopup}>Login</button>
              </li>
              <li>
                <button onClick={togglePopup}>Signin</button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Popups */}
      <SignInPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        users={users}
        setUsers={setUsers}
        setLoggedIn={setLoggedIn} // Pass setLoggedIn to update login status
      />
      <LoginPopup
        showPopup={showLoginPopup}
        setShowPopup={setShowLoginPopup}
        users={users}
        setUsers={setUsers}
        setLoggedIn={setLoggedIn} // Pass setLoggedIn to update login status
      />
    </div>
  );
}

export default Navbar;
