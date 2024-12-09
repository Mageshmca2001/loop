import logoImage from"../images/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen font-poppins bg-center bg-cover relative">
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-blue-400 bg-opacity-80 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-md">
      <div className="flex flex-col items-center">

<img src={logoImage} alt="Logo" className="w-24 h-24 rounded-full mb-4"/>

        <h2 className="text-white text-2xl font-semibold mb-6">LOG IN</h2>
      </div>
      <form className="space-y-6">
        <div className="relative input-container">
          <i className="fas fa-user absolute left-3 top-3 text-white"></i>
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:border-white placeholder-white"
          />
        </div>

        <div className="relative input-container">
          <i className="fas fa-lock absolute left-3 top-3 text-white"></i>
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:border-white placeholder-white"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="form-checkbox h-4 w-4 text-purple-600"
          />
          <label htmlFor="remember" className="ml-2 text-white">Remember me</label>
        </div>
        <button onClick={handleNavigate}
          type="submit"
          className="w-full py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
        >
          Login
        </button>
      </form>

      <div className="text-center mt-4">
        <a href="#" className="text-white text-sm hover:underline">Forgot Password?</a>
      </div>
    </div>
  </div>
</div>

  );
};

export default MainPage;

/* This is Without Router Converted */

/*import './Css/MainPage.css'
import logoImage from"../images/logo.png";
import React from "react";

const MainPage = () => {
  return (

<div className="flex items-center justify-center h-screen font-poppins bg-center bg-cover relative">
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-blue-400 bg-opacity-80 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-md">
      <div className="flex flex-col items-center">

<img src={logoImage} alt="Logo" className="w-24 h-24 rounded-full mb-4"/>

        <h2 className="text-white text-2xl font-semibold mb-6">LOG IN</h2>
      </div>
      <form className="space-y-6">
        <div className="relative input-container">
          <i className="fas fa-user absolute left-3 top-3 text-white"></i>
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:border-white placeholder-white"
          />
        </div>

        <div className="relative input-container">
          <i className="fas fa-lock absolute left-3 top-3 text-white"></i>
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:border-white placeholder-white"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="form-checkbox h-4 w-4 text-purple-600"
          />
          <label htmlFor="remember" className="ml-2 text-white">Remember me</label>
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
        >
          Login
        </button>
      </form>

      <div className="text-center mt-4">
        <a href="#" className="text-white text-sm hover:underline">Forgot Password?</a>
      </div>
    </div>
  </div>
</div>



    
  );
};

export default MainPage;*/