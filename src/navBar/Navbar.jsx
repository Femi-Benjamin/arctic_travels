import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Support Us', path: '/support' },
    { name: 'FAQ', path: '/faq' },
  ];

  const { user, logout } = useAuth();

  return (
    <nav className="bg-arctic-800/60 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-arctic-700/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold text-arctic-blue">Arctic Travels</span>
            </Link>
          </div>

          {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${isActive(link.path)
                    ? 'text-arctic-blue'
                    : 'text-text-secondary hover:text-arctic-blue'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-text-primary text-sm">Hi, <strong>{user.name}</strong></span>
                <Button size="sm" variant="outline" onClick={() => logout()}>Sign Out</Button>
              </div>
            ) : (
              <>
                <Link to="/signin">
                  <Button size="sm" variant="white">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" variant="ghost">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-arctic-blue focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-arctic-800/80 border-t border-arctic-700/40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                    ? 'text-arctic-blue bg-arctic-200/10'
                    : 'text-text-secondary hover:text-arctic-blue hover:bg-arctic-200/5'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              {user ? (
                <div className="space-y-2">
                  <div className="text-text-primary px-3 py-2">Signed in as <strong>{user.name}</strong></div>
                  <button onClick={() => { setIsOpen(false); logout(); }} className="w-full bg-arctic-blue text-white py-2 rounded-lg">Sign Out</button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link to="/signin" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;