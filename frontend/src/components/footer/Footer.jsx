import React from 'react';


function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm">This is a calorie calculator website which will help you stay healthy and motivated during your low days. </p>
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm">GNA UNIVERSITY PHAGWARA</p>
            <p className="text-sm">Phone: +91 7865428327</p>
            <p className="text-sm">Email: NutriLogix@gmail.com</p>
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4">Social Media</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                <i className='bx bxl-facebook' ></i>                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                <i className='bx bxl-twitter' ></i>   
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                <i className='bx bxl-instagram' ></i>   
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                <i className='bx bxl-linkedin' ></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4">Subscribe to our Diet Plan</h2>
            <form>
              <div className="flex items-center">
                <input type="email" placeholder="Your email address" className="rounded-l-lg p-4 outline-none bg-gray-800 text-white w-full" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-r-lg px-6 py-4">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
