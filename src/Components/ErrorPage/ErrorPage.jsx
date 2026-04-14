import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
     
      <h1 className="text-7xl font-bold text-indigo-600 mb-4">404</h1>

      
      <h2 className="text-2xl font-semibold mb-2">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 mb-6">
        The page you are looking for doesn’t exist or has been moved.
      </p>

   
      <a
        href="/"
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Go Back Home
      </a>

      
    </div>
        </div>
    );
};

export default ErrorPage;