import React from 'react';

const Banner = () => {
    return (
    <div className="max-w-11/12  mx-auto flex flex-col items-center justify-center py-12 max-w-[570px]:py-8  ">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Friends to keep close in your life</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
      
      <button className="bg-emerald-900 text-white px-6 py-2 rounded-md font-medium mb-12 hover:bg-emerald-800 transition-colors">
        + Add a Friend
      </button>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-11/12 mx-auto">
        {[
          { label: 'Total Friends', count: 8 },
          { label: 'On Track', count: 3 },
          { label: 'Need Attention', count: 6 },
          { label: 'Interactions This Month', count: 12 },
        ].map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
            <span className="text-4xl font-semibold text-emerald-900 mb-2">{item.count}</span>
            <span className="text-gray-500 text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;