import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';

const LoginPopup = ({ showPopup, setShowPopup, users, setLoggedIn, setUsers}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Username and password are required!');
      return;
    }

    // Retrieve users from localStorage or fallback to the `users` array
    const storedUsers = JSON.parse(localStorage.getItem('users')) || users;

    // Check if the user exists
    const user = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setError('');
      toast.success('Login successful!');
      
      // Save the logged-in user to localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      // Update state in Navbar
      setUsers(user);
      setLoggedIn(true);
      setShowPopup(false); // Close popup
    } else {
      setError('Invalid username or password.');
      toast.error('Invalid username or password.');
    }
  };

  if (!showPopup) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Username</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-2"
          >
            Login
          </button>
        </form>
        <button
          className="mt-4 text-sm text-gray-400 hover:text-gray-300"
          onClick={() => setShowPopup(false)}
        >
          Cancel
        </button>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default LoginPopup;
