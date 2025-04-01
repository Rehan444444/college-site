import React from 'react'
import { Bell, Search } from 'lucide-react';
import Notify from './Notify';

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-4 w-full lg:w-auto justify-between">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4u3nm1_7AX51zulS3t3TJbKj6aVmy68-lw&s" 
                alt="University Logo" 
                className="w-20 h-20 rounded"
              />
              <div className="mx-4 lg:mx-32 text-center lg:text-left">
                <h1 className="text-2xl lg:text-3xl font-bold text-red-800">Pandit Shambhu Nath Shukla University, Shahdol</h1>
                <h1 className="text-lg lg:text-2xl font-bold text-red-800 mx-4 lg:mx-20">पंडित शंभूनाथ शुक्ला विश्वविद्यालय, शहडोल (म. प्र.)</h1>
              </div>
              <img 
                src="https://jiwaji.edu/wp-content/uploads/2021/12/mybharatlogo.png.webp" 
                alt="Logo" 
                className='w-40 h-20 hidden lg:block'
              />
            </div>

            {/* Search and Notification Section */}
            {/* <div className="hidden lg:flex items-end gap-6">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-800"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div> */}
          </div>
        </div>
      </header>
      <Notify />
    </div>
  );
}

export default Header;
