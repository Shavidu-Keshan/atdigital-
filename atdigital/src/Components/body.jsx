import React from "react";
import monitorImage from "../assets/monitor.png";
import searchImage from "../assets/search.png";

const Body = () => {
  return (
    <div className="mb-20"> {/* Added margin-bottom for spacing */}
      <div className="w-full px-6 mt-0 md:px-16 lg:px-24 py-">
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img src={monitorImage} alt="Service" className="w-1/2 md:w-3/4 h-auto" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-600">Web & Mobile App<br /> Development</h2>
            <p className="text-gray-700 mb-4 font-bold">
              Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-5 py-2 rounded">LEARN MORE</button>
          </div>
        </div>
      </div>

      <div className="w-full px-6 mt-0 md:px-6 lg:px-24 py-6">
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6">
          <div className="w-full md:w-1/2 text-center md:text-left sm:flex-row-reverse">
            <h2 className="text-2xl font-bold text-purple-600">Digital Strategy Consulting</h2>
            <p className="text-gray-700 mb-4 font-bold">
              Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-5 py-2 rounded">LEARN MORE</button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img src={searchImage} alt="Service" className="w-1/2 md:w-3/4 h-auto" />
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-600">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          <details className="bg-indigo-50 p-5 rounded border border-indigo-200">
            <summary className="font-bold text-blue-600 cursor-pointer flex justify-between items-center">
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
              <span className="text-xl">&#8722;</span>
            </summary>
            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultricies nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
          </details>
          <details className="bg-indigo-50 p-5 rounded border border-indigo-200">
            <summary className="font-bold cursor-pointer flex justify-between items-center">
              Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
              <span className="text-xl">&#43;</span>
            </summary>
            <p className="mt-2 text-gray-700 hidden">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </details>
          <details className="bg-indigo-50 p-5 rounded border border-indigo-200">
            <summary className="font-bold cursor-pointer flex justify-between items-center">
              Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
              <span className="text-xl">&#43;</span>
            </summary>
            <p className="mt-2 text-gray-700 hidden">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Body;
