import React from 'react'
// import TestComponent from './components/testcomponent/TestComponent'
// import Header from './components/header/Header'
import MusicPlayer from './components/musicplayer/MusicPlayer'
import SearchBar from './components/searchbar/SearchBar';
import "./App.css"


const App = () => {
  return (
    <div className='App'>
      {/* <TestComponent/> */}

      <div className='header-container'>
        <h1>Harmonize</h1>
        <div className='search'>
        </div>
      </div>

      <div className='body-container'>
        <MusicPlayer />
        <SearchBar/>
        <div className='lyrics'>
          <h2>Lyrics</h2>
        </div>
      </div>
    </div>
  )
}

export default App