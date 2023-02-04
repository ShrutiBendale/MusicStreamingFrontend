import React from 'react'
import './songs.css'
import SongCard from '../songcard/SongCard';

export default function Songs({ songs }) {

  return (
    <div className='songs-container'>
        {!songs ? (
            <p>No songs found! Try improving the search query...</p>
        ) : (
            <ul>
              {songs.map((el, i) => (
                //   <li key = {i}>{el.title}</li>
                  <SongCard songInfo={el} />
              ))}
            </ul> 
        )}
    </div> 
  )
}

