import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../images/logo1.png'; // Update this path based on your project structure
import bgImage from '../images/Mac.jpg'; // Add your background image here

const LoginPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleMicrosoftLogin = (e) => {
    e.preventDefault();
    console.log('Microsoft login');
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    console.log('Google login');
  };

  return (
    <div className="relative h-screen">
      {/* Background Image Wrapper */}
      <div
  className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(139, 139, 139, 0), rgba(33, 88, 255, 0.65)), url(${bgImage})`,
    opacity: 0.2,
  }}
></div>


      {/* Login Content */}
      <div className="flex items-center justify-center h-full">
        <div
          className="bg-opacity-100 backdrop-blur-md rounded-lg p-8 shadow-lg w-100"
          style={{
            backgroundColor: 'rgb(80, 120, 230)', 
          }}
        >
          <div className="flex flex-col items-center">
            <img
              src={logoImage}
              alt="Logo"
              className="w-24 h-24 rounded-full mb-6"
            />
            <h2 className="text-white text-3xl font-semibold mb-6">LOG IN</h2>
          </div>
          <form className="space-y-6">
            <div className="relative input-container">
              <i className="fas fa-user absolute left-3 top-3 text-white"></i>
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b-2 border-gray-300 text-white text-ml focus:outline-none focus:border-white placeholder-white"
              />
            </div>

            <div className="relative input-container">
              <i className="fas fa-lock absolute left-3 top-3 text-white"></i>
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b-2 border-gray-300 text-white text-ml focus:outline-none focus:border-white placeholder-white"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="form-checkbox h-5 w-5 text-purple-600"
              />
              <label htmlFor="remember" className="ml-2 text-white text-ml">
                Remember me
              </label>
            </div>

            {/* Center the Login Button */}
            <div className="mt-4 flex space-x-4">
              <button
                onClick={handleNavigate}
                type="submit"
                className="w-full sm:w-100 py-3 rounded-lg bg-white text-black font-semibold text-ml hover:bg-gray-200 transition duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <a href="#" className="text-white text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Microsoft and Google login buttons */}
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleMicrosoftLogin}
              className="w-full sm:w-50 py-3 rounded-lg bg-white text-white font-semibold text-ml  transition duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <i className="fab fa-microsoft text-black text-base"></i>
              
            </button>
            <button
              onClick={handleGoogleLogin}
              className="w-full sm:w-50 py-3 rounded-lg bg-white text-white font-semibold text-ml  transition duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <i className="fab fa-google text-black text-base"></i>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;