import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Bike, Home, Calendar, ShoppingCart } from 'lucide-react';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import ShopPage from './pages/Shop';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Bike className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">ACP RideHub</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around">
            <Link
              to="/"
              className={`flex flex-col items-center transition-colors duration-200 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link
              to="/events"
              className={`flex flex-col items-center transition-colors duration-200 ${
                isActive('/events') ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
              }`}
            >
              <Calendar className="w-6 h-6" />
              <span className="text-xs mt-1">Events</span>
            </Link>
            <Link
              to="/shop"
              className={`flex flex-col items-center transition-colors duration-200 ${
                isActive('/shop') ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs mt-1">Shop</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 pt-16 pb-20">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;