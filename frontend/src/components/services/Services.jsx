import React from 'react';

function Services() {
  return (

    <div className=" min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <h1 className="text-white text-6xl mb-8">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-black border-2 border-white p-8 rounded-lg shadow-md transition duration-300 cursor-pointer hover:text-black hover:bg-white">
          <p className="text-xl font-bold mb-4">Personalized Diet Plan Subscription</p>
          <p className="text-lg font-bold">Rs.3999</p>
        </div>

        <div className="bg-black border-2 border-white p-8 rounded-lg shadow-md transition duration-300 cursor-pointer hover:text-black hover:bg-white">
          <p className="text-xl font-bold mb-4">Fitness and Exercise Program Membership</p>
          <p className="text-lg font-bold">Rs.4999</p>
        </div>

        <div className="bg-black border-2 border-white p-8 rounded-lg shadow-md transition duration-300 cursor-pointer hover:text-black hover:bg-white">
          <p className="text-xl font-bold mb-4">Yoga and Mindfulness Classes</p>
          <p className="text-lg font-bold">Rs.5949</p>
        </div>

        <div className="bg-black border-2 border-white p-8 rounded-lg shadow-md transition duration-300 cursor-pointer hover:text-black hover:bg-white">
          <p className="text-xl font-bold mb-4">Personalized Diet Plan</p>
          <p className="text-lg font-bold">Rs.6949</p>
        </div>

        <div className="bg-black border-2 border-white p-8 rounded-lg shadow-md transition duration-300 cursor-pointer hover:text-black hover:bg-white">
          <p className="text-xl font-bold mb-4">Health Monitoring and Progress Tracking Tools</p>
          <p className="text-lg font-bold">Rs.7949</p>
        </div>

        <div className="bg-black border-2 border-white p-8 rounded-lg shadow-md transition duration-300 cursor-pointer hover:text-black hover:bg-white">
          <p className="text-xl font-bold mb-4">Online Consultations and Coaching Sessions</p>
          <p className="text-lg font-bold">Rs.7999</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
