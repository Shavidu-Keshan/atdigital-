import React from 'react';
import heroImage from '../assets/hero.png';

const HeroSection = () => {
  return (
    <section
      className="relative bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        height: '100vh', // Makes the height adjust to the viewport
        backgroundSize: 'cover', // Ensures the full image is displayed
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center px-8 py-100 relative z-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-white bg-[#17A2B8] p-8 rounded-lg shadow-lg">
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '48px',
              letterSpacing: '-0.02em',
            }}
          >
            We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
          </h1>
          <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded shadow-lg hover:bg-orange-600">
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
