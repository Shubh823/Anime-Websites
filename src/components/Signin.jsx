import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { auth, provider, signInWithPopup } from '../firbase'; // Import Firebase config
import { toast } from 'react-toastify'; // Import toast

const SignInPopup = ({ showPopup, setShowPopup, users, setUsers, setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null); // To store logged in user from Firebase

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('All fields are required!');
      toast.error('All fields are required!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      toast.error('Please enter a valid email address.');
      return;
    }

    setError('');

    // Add user to the array and localStorage
    const newUsers = [...users, { username, email, password }];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers)); // Save to localStorage

    // Set user as logged in
    localStorage.setItem('loggedIn', true); // Store login status in localStorage
    setLoggedIn(true); // Update the loggedIn state

    toast.success('Sign-in successful!');
    setShowPopup(false);
  };

  // Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const googleUser = result.user;

      // Set user data in the state
      setUser(googleUser);
      setLoggedIn(true); // Mark user as logged in

      // Save user to localStorage
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('user', JSON.stringify(googleUser));

      toast.success('Google sign-in successful!');
      setShowPopup(false);
    } catch (err) {
      setError('Authentication failed: ' + err.message);
      toast.error('Authentication failed: ' + err.message);
      
    }
  };

  if (!showPopup) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>

        {user ? (
          <div>
            <h3>Welcome, {user.displayName}</h3>
            <img src={user.photoURL} alt="User Avatar" />
            <button
              className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
              onClick={() => {
                setUser(null);
                setLoggedIn(false);
                localStorage.removeItem('loggedIn');
                localStorage.removeItem('user');
                setShowPopup(false);
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
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
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              Sign In
            </button>
          </form>
        )}

        <button
          className="mt-4 text-sm text-gray-400 hover:text-gray-300"
          onClick={() => setShowPopup(false)}
        >
          Cancel
        </button>

        {!user && (
          <button
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
            onClick={handleGoogleSignIn}
          >
            Sign In with Google
          </button>
        )}
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default SignInPopup;
