import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

const Main = ({ animes }) => {
  const [visibleAnimes, setVisibleAnimes] = useState([]); // Tracks the currently visible anime list
  const [lastVisibleIndex, setLastVisibleIndex] = useState(8); // Initial items to display
  const loaderRef = useRef(null); // Ref to track the loader element

  useEffect(() => {
    setVisibleAnimes(animes.slice(0, lastVisibleIndex));
  }, [lastVisibleIndex, animes]);

  // Use IntersectionObserver to detect when the loader comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setLastVisibleIndex((prevIndex) => Math.min(prevIndex + 8, animes.length)); // Load 8 more items
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [animes.length]);

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12">{visibleAnimes.length===0?(<div className='p-4 bg-gray-900 text-2xl flex justify-center text-yellow-50'> No Anime exists with this name or perhaps we dont have that anime yet sorry!</div>):"Anime List"}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleAnimes.map((anime) => (
            <Card key={anime.id} anime={anime} />
          ))}
        </div>
        {/* Loader to trigger loading more content */}
        {lastVisibleIndex < animes.length && (
          <div ref={loaderRef} className="text-white text-center mt-8">
            <span>Loading more...</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Main;
