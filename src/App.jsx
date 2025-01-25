import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Header2 from './components/Header2';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import {animes} from './data';

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [animeList,setAnimeList] = useState(animes);

  // Filter anime list based on the search query
  const filteredAnime = animeList.filter((anime) =>
    (anime.name?.toLowerCase()?.includes(search.toLowerCase()))
  );
  

  useEffect(() => {
    // Redirect to the home route ("/") whenever the component mounts
    navigate('/');
  }, [navigate]);


  return(
    <>
      <Navbar setSearch={setSearch} />
      {search===""? (<div>
      <Header />
      <Header2 />
      </div>):null}
      
      
      <Main animes={filteredAnime} />
      <Footer />
      <Routes>
        <Route path="/" element={""} />
        {/* You can add other routes here as needed */}
      </Routes>
      </>
  );
}

export default App;
