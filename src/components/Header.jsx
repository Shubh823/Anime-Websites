import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: 'url(/wp5203548.jpg)' }}>
        <div className='left h-1/2 w-1/2 flex flex-col justify-center items-center'>
          <h1 className='text-4xl text-white-200 bold'>Welocome to the Anime World!</h1>
          <h3 className='text-xl mt-2 m-2 heading-2 w-[80%] '>Here you can watch free animes with good quility and all the latest released animes and anime movies.</h3>
        </div>
        <div className='right md:w-full w-1/2 flex flex-col justify-center items-center my-2  '>
          <div className='right-section  bg-gray-900 '>
               <div className='title'> Trending Animes Shows</div>
               
               <div className='container'>
                <div className='box'>
                    <div className='anime-image'>
                      <img src="\blackclover.jpg" alt="image" />
                    </div>
                     <div className='content'><h2>Black Clover</h2> 
                        <Link to="https://9animetv.to/watch/black-clover-2404?ep=27377"><button>Watch Now</button></Link>
                     </div>
               </div>

               <div className='box'>
                    <div className='anime-image'>
                      <img src="\naruto.jpg" alt="image" />
                    </div>
                     <div className='content'><h2>Naruto</h2>
                     <a href="https://9animetv.to/watch/naruto-677?ep=12403"><button>Watch Now</button></a>
                     </div>
               </div>

               <div className='box'>
                    <div className='anime-image'>
                      <img src="\onepice.jpg" alt="image" />
                    </div>
                     <div className='content'><h2>One Piece</h2>
                     <a href="https://9animetv.to/watch/one-piece-100?ep=128589"><button>Watch Now</button></a>
                     </div>
               </div>

               <div className='box'>
                    <div className='anime-image'>
                      <img src="\death note.jpg" alt="image" />
                    </div>
                     <div className='content'><h2>Death Note</h2>
                     <a href="https://9animetv.to/watch/death-note-60?ep=1464"><button>Watch Now</button></a>
                     </div>
               </div>

               <div className='box'>
                    <div className='anime-image'>
                      <img src="\jujutsu.png" alt="image" />
                    </div>
                     <div className='content'><h2>Jujutsu kaisen</h2>
                     <a href="https://9animetv.to/watch/jujutsu-kaisen-2nd-season-18413?ep=102662"><button>Watch Now</button></a>
                     </div>
               </div>

               <div className='box'>
                    <div className='anime-image'>
                      <img src="\hunter.jpg" alt="image" />
                    </div>
                     <div className='content'><h2>Hunter X Hunter</h2>
                     <a href="https://9animetv.to/watch/hunter-x-hunter-2?ep=65"><button>Watch Now</button></a>
                     </div>
               </div>

               <div className='box'>
                    <div className='anime-image'>
                      <img src="\bleach.jpg" alt="image" />
                    </div>
                     <div className='content'><h2>Bleach</h2>
                     <a href="https://9animetv.to/watch/bleach-806?ep=13793"><button>Watch Now</button></a>
                     </div>
               </div>

               <div className='box'>
                    <div className='anime-image'>
                      <img src="\dr stone.jpg" alt="image" />
                    </div>
                     <div className='content'><h2>Dr Stone</h2>
                     <a href="https://9animetv.to/watch/dr-stone-175?ep=4299"><button>Watch Now</button></a>
                     </div>
               </div>
                   
               </div>
          </div>
        </div>
    </div>
  )
}

export default Header
