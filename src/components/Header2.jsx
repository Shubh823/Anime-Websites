import React, { useState, useEffect } from "react";

const animeList = [
  {
    id: 1,
    image: "\scroll1.jpg", // Replace with anime image URLs
    description: "Anime 1: A thrilling adventure about a young hero."
  },
  {
    id: 2,
    image: "\scroll2demon.jpg",
    description: "Demon Slayer: Kimetsu no Yaiba"
  },
  {
    id: 3,
    image: "\scroll3bleach.jpg",
    description: "Bleach  a story about a young shinigami."
  },
  {
    id: 4,
    image: "\scroll4.onepice.jpg",
    description: "One Piece: A pirate's tale of friendship and adventure."
  }
];

export default function AnimeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update index to show the next anime
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length);
    }, 5000); // Change every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Carousel Container */}
      <div className="w-full h-full flex transition-transform duration-700 " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {animeList.map((anime) => (
          <div
            key={anime.id}
            className="flex-shrink-0 w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white"
            style={{ minWidth: "100%" }}
          >
            <img src={anime.image} alt={anime.description} className="m-3 w-full h-[80%] object-cover opacity-50" />
            <p className="mt-4 text-lg">{anime.description}</p>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 mt-4">
        {animeList.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
