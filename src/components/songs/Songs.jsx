import React from 'react'
import './songs.css'
import SongCard from '../songcard/SongCard';

export default function Songs({ songs }) {

  return (
    <div className='songs-container'>
        {!songs ? (
            <p>No songs found! <br/>Try improving the search query or click on 'Browse All' to browse all songs..</p>
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

