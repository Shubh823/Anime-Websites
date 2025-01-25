import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={anime.image}
        alt={anime.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{anime.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{anime.description}</p>
        <div className="flex justify-between items-center">
          <a href={anime.link}><button className="bg-green-500 text-white px-4 py-2 text-sm font-medium hover:bg-green-600">
            Watch Now
          </button></a>
          <span className="text-sm font-bold text-gray-300">
            Episodes: {anime.episodes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
