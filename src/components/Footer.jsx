import React from 'react';

const Footer = () => {
    return (
  <footer className="bg-green-900 text-gray-200 py-12 mt-10 mb-0">
    <div className="max-w-5xl mx-auto px-6 text-center">
      
      <h2 className="text-3xl font-bold text-white mb-3">
        KeenKeeper
      </h2>

      <p className="text-sm text-gray-300 mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <p className="text-sm text-gray-300 mb-4">Social Links</p>

      <div className="flex justify-center gap-4 mb-8">
        <img src="/Social Links.png" alt="" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 border-t border-gray-700 pt-6">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>

    </div>
  </footer>
);
};

export default Footer;