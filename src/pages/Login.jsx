import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Retrieve user data from localStorage
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      toast.success('Login successful!');
      // Implement login success logic here
    } else {
      toast.error('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="form-container">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome to Authentication System </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Username@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-800">
              Forgot your password?
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-800">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
