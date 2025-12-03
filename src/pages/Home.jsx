import React from "react";
import Button from "../components/Button";
import BookTrip from "../components/BookTrip";
import Passes from "../components/Passes";
import Resort from "../components/Resort";
import FooterHero from "../components/FooterHero";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[90vh] min-h-[600px] overflow-hidden bg-black">
        {/* Guaranteed background image using fixed-position */}
        <img
          src="/bg.jpg"
          alt="Arctic landscape"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
          <div className="backdrop-blur-md bg-black/30 rounded-xl py-10 px-6 md:px-12 shadow-2xl max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-lg mb-6 animate-fade-in-up">
              Plan The Perfect{" "}
              <span className="text-arctic-blue">Winter Trip</span>
            </h1>
            <p className="text-lg md:text-2xl font-light text-gray-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Easily plan your ideal ski trip from home with the help of
              professionals
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button
                size="lg"
                variant="primary"
                className="shadow-lg hover:scale-105 transition-transform"
              >
                Book Now
              </Button>
              <div className="text-sm text-text-secondary flex items-center gap-3">
                <span className="hidden sm:inline">Share:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    "Plan the perfect winter trip with Arctic Travels"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-arctic-blue"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-arctic-blue"
                >
                  Facebook
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert("Copied link");
                  }}
                  className="hover:text-arctic-blue"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-24 mt-16">
        <BookTrip />
        <Passes />
        <Resort />
        <FooterHero />
      </section>
    </main>
  );
};

export default Home;
