import React from 'react';
import logo from '../assets/logo.png';  // Import the logo image from the assets folder

const Footer = () => {
  return (
    <footer className="bg-[#4B3EFF] text-white px-16 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-90 text-center md:text-left">
      
      
          {/* Logo and Description Section */}
          <div className="max-w-md">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img src={logo} alt="at digital" className="h-12" />
            </div>
            <p className="text-sm leading-relaxed">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.
            </p>
          </div>

          {/* Our Technologies Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Technologies</h3>
            <ul className="space-y-3">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-16 pt-6 border-t border-white/50 text-center">
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
