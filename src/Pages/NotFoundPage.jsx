import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl md:text-3xl font-semibold text-gray-800 mt-4">
          Oops! Page not found.
        </p>
        <p className="mt-4 text-md md:text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/home"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-sm md:text-base hover:bg-blue-600 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
