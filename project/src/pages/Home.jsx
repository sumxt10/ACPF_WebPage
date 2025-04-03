import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1920"
          alt="Cycling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex flex-col justify-center px-8">
          <h1 className="text-5xl font-bold mb-4 text-white max-w-2xl">Join the Cycling Revolution</h1>
          <p className="text-xl text-white/90 max-w-xl">Making cycling accessible for everyone through community, education, and shared resources.</p>
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit">
            Get Started
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Regular Events</h2>
          <p className="text-gray-600">Join our weekly group rides and monthly workshops</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Active Community</h2>
          <p className="text-gray-600">Connect with fellow cyclists and share experiences</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <div className="bg-purple-100 p-4 rounded-full mb-4">
            <Award className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Expert Guidance</h2>
          <p className="text-gray-600">Learn from certified cycling instructors</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Weekend Group Ride</h3>
                <p className="text-gray-600">Saturday, March 2nd - 8:00 AM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Beginner's Workshop</h3>
                <p className="text-gray-600">Sunday, March 3rd - 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold">New Bike Fleet Arrived</h3>
              <p className="text-gray-600">Our rental fleet has been upgraded with new bikes!</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold">Spring Schedule Released</h3>
              <p className="text-gray-600">Check out our exciting spring events calendar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;