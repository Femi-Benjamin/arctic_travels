import React from "react";
import Slide from "react-reveal/Slide";

const resorts = [
  {
    id: 1,
    name: "Arctic Glass Igloos",
    description:
      "Sleep under the magical Northern Lights in our premium glass igloos. Experience the arctic wilderness with 5-star comfort.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    name: "Ice Hotel Jukkasjärvi",
    description:
      "Experience the original ice hotel, meticulously sculpted from fresh ice each winter. A truly unique frozen art exhibition.",
    image:
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 3,
    name: "Kakslauttanen Resort",
    description:
      "World-famous for its glass igloos and log cabins. Enjoy the sauna, reindeer safaris, and the enchanting Santa's Home.",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1625&q=80",
  },
  {
    id: 4,
    name: "Sorrisniva Igloo Hotel",
    description:
      "The northernmost ice hotel in the world. Immerse yourself in the silence and purity of the Arctic winter.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
];

function Resort() {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <Slide left>
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-arctic-dark leading-tight">
            <br />{" "}
            <span className="text-arctic-blue">
              The best resorts to chill and relax.
            </span>
          </h1>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl">
            Discover our hand-picked selection of premium Arctic accommodations
            — from cozy igloos to luxury lodges. Book your stay and experience
            the Northern Lights in comfort.
          </p>
        </div>
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resorts.map((resort, index) => (
          <Slide bottom delay={index * 100} key={resort.id}>
            <div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
              <img
                src={resort.image}
                alt={resort.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {resort.name}
                </h3>
                <p className="text-gray-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {resort.description}
                </p>
                <button className="mt-4 px-6 py-2 bg-arctic-blue text-white rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}

export default Resort;
