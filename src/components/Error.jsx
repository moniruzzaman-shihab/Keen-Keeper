import React from 'react';

const Error = () => {
    return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p className="text-gray-500 text-center max-w-md mb-6">
      Sorry, the page you are looking for does not exist or has been moved.
    </p>

    <a
      href="/"
      className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
    >
      Go Back Home
    </a>
  </div>
)
};

export default Error;