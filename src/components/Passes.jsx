import React, { useState, useEffect, useMemo } from "react";
import Slide from "react-reveal/Slide";
import Reviews from "./Reviews";

const passesData = [
  {
    id: 1,
    title: "Single Day Pass",
    price: "$89",
    description:
      "Perfect for a quick getaway. Enjoy full access to all slopes and lifts for one full day.",
    details:
      "Includes equipment rental discount and access to the main lodge. Valid from 8:00 AM to 8:00 PM.",
    image:
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80",
  },
  {
    id: 2,
    title: "Weekend Warrior",
    price: "$159",
    description:
      "Make the most of your weekend with unlimited access Saturday and Sunday.",
    details:
      "Includes priority lift access and a complimentary drink at the Ice Bar. Valid Saturday & Sunday.",
    image:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80",
  },
  {
    id: 3,
    title: "Season Pass",
    price: "$599",
    description:
      "Unlimited skiing all season long. The best value for locals and frequent visitors.",
    details:
      "Unlimited access all season. 20% off at all resort restaurants and shops. 5 Buddy Passes included.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Family Bundle",
    price: "$899",
    description:
      "Fun for the whole family. Includes passes for 2 adults and 2 children.",
    details:
      "Includes ski school introductory lesson for kids. Valid for the entire season. Additional kids 50% off.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "VIP Gold Access",
    price: "$1,299",
    description:
      "The ultimate luxury experience. Private guides, spa access, and exclusive events.",
    details:
      "Private locker room, valet parking, fast-track lift lines, and unlimited spa entry. Exclusive après-ski events.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
];

const Passes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedPass, setSelectedPass] = useState(null);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  // slider timer is set after filteredPasses is computed

  const handleViewDetails = (pass) => {
    setSelectedPass(pass);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPass(null);
  };

  const filteredPasses = useMemo(() => {
    const q = search.toLowerCase().trim();
    return passesData.filter((p) => {
      const textMatch = [p.title, p.description, p.details, p.price]
        .join(" ")
        .toLowerCase()
        .includes(q);
      if (!textMatch) return false;

      if (priceFilter === "all") return true;
      const priceNum = Number(p.price.replace(/[^0-9]/g, "")) || 0;
      if (priceFilter === "budget") return priceNum <= 120;
      if (priceFilter === "mid") return priceNum > 120 && priceNum <= 600;
      if (priceFilter === "premium") return priceNum > 600;
      return true;
    });
  }, [search, priceFilter]);

  useEffect(() => {
    if (filteredPasses.length <= 1) {
      setCurrentSlide(0);
      return;
    }
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredPasses.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [filteredPasses.length]);

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <Slide top>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Choose Your Adventure
              </h2>
              <p className="text-xl text-text-secondary">
                Explore our flexible pass options designed for every traveler.
              </p>
            </div>
          </Slide>

          <div className="w-full md:w-1/2">
            <div className="flex gap-3 items-center rounded-xl bg-arctic-900/60 p-3 shadow-lg">
              <input
                aria-label="Search passes"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search passes, price, or keywords"
                className="w-full px-4 py-3 rounded-lg bg-arctic-800/50 text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-arctic-blue/30 border border-arctic-blue/40"
              />

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-3 py-3 rounded-lg bg-arctic-800/40 text-text-primary border border-arctic-blue/60 focus:border-arctic-blue/80"
              >
                <option value="all">All prices</option>
                <option value="budget">Budget (&le; $120)</option>
                <option value="mid">Mid ($121 - $600)</option>
                <option value="premium">Premium (&gt; $600)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
          {filteredPasses.length ? (
            filteredPasses.map((pass, index) => (
              <div
                key={pass.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={pass.image}
                  alt={pass.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/logo.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                  <div className="p-8 md:p-16 max-w-2xl text-white">
                    <h3 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                      {pass.title}
                    </h3>
                    <p className="text-3xl text-arctic-blue font-semibold mb-6 animate-fade-in-up delay-100 border-2 border-arctic-blue/60 rounded-xl inline-block px-4 py-2 bg-arctic-900/60 shadow-md">
                      {pass.price}
                    </p>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up delay-200">
                      {pass.description}
                    </p>
                    <button
                      onClick={() => handleViewDetails(pass)}
                      className="bg-arctic-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 animate-fade-in-up delay-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-text-secondary z-20">
              No results found for "{search}".
            </div>
          )}

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {filteredPasses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-arctic-blue w-8"
                    : "bg-arctic-ice/40 hover:bg-arctic-ice/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Interface */}
      {showModal && selectedPass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-arctic-800/80 rounded-3xl max-w-2xl w-full p-8 relative animate-scale-in text-text-primary border border-arctic-700/30">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-3xl font-bold text-text-primary mb-2">
              {selectedPass.title}
            </h3>
            <p className="text-2xl text-arctic-blue font-semibold mb-6 border-2 border-arctic-blue/60 rounded-xl inline-block px-4 py-2 bg-arctic-900/60 shadow-md">
              {selectedPass.price}
            </p>

            <div className="space-y-4">
              <div className="bg-arctic-700/40 p-6 rounded-xl border border-arctic-700/20">
                <h4 className="font-bold text-text-primary mb-2">
                  Description
                </h4>
                <p className="text-text-secondary">
                  {selectedPass.description}
                </p>
              </div>

              <div className="bg-arctic-700/40 p-6 rounded-xl border border-arctic-700/20">
                <h4 className="font-bold text-arctic-ice mb-2">
                  Pass Details & Perks
                </h4>
                <p className="text-text-secondary">{selectedPass.details}</p>
              </div>

              <Reviews type="pass" id={selectedPass.id} />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <div className="flex gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none bg-arctic-blue text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors px-6">
                  Add to Cart
                </button>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border-2 border-arctic-700/30 rounded-xl font-bold text-text-secondary hover:border-arctic-700/40 transition-colors"
                >
                  Close
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <span className="hidden sm:inline">Share:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    selectedPass.title + " — " + selectedPass.price
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
                    alert("Link copied");
                  }}
                  className="hover:text-arctic-blue"
                >
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Passes;
