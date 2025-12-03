import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-arctic-800/70 border-t border-arctic-700/40 pt-16 pb-8 text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-arctic-ice mb-4 block">Arctic Travels</Link>
            <p className="text-text-secondary text-sm leading-relaxed">Book your perfect winter getaway with us. We provide the best experiences in the coldest places on Earth.</p>
          </div>

          <div>
            <h3 className="font-bold text-text-primary mb-4">Company</h3>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><Link to="/about" className="hover:text-arctic-blue transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-arctic-blue transition-colors">Careers</Link></li>
              <li><Link to="/mobile" className="hover:text-arctic-blue transition-colors">Mobile</Link></li>
              <li><Link to="/blog" className="hover:text-arctic-blue transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-text-primary mb-4">Contact</h3>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><Link to="/support" className="hover:text-arctic-blue transition-colors">Help/FAQ</Link></li>
              <li><Link to="/press" className="hover:text-arctic-blue transition-colors">Press</Link></li>
              <li><Link to="/affiliates" className="hover:text-arctic-blue transition-colors">Affiliates</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-text-primary mb-4">More</h3>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><Link to="/airline-fees" className="hover:text-arctic-blue transition-colors">Airline Fees</Link></li>
              <li><Link to="/airline" className="hover:text-arctic-blue transition-colors">Airline</Link></li>
              <li><Link to="/tips" className="hover:text-arctic-blue transition-colors">Low Fare Tips</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-arctic-700/40 pt-8 flex items-center justify-between gap-6">
          <p className="text-text-secondary text-sm">© {new Date().getFullYear()} Arctic Travels. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <div className="hidden md:block w-96"><Newsletter /></div>
            <div className="flex space-x-4 text-text-secondary">
              <a href="#" aria-label="Instagram" className="hover:text-arctic-blue">📸</a>
              <a href="#" aria-label="Twitter" className="hover:text-arctic-blue">🐦</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
