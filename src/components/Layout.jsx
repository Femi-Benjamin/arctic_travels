import React from 'react';
import Navbar from '../navBar/Navbar';
import Footer from './Footer';
import LiveChat from './LiveChat';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-transparent">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <LiveChat />
        </div>
    );
};

export default Layout;
