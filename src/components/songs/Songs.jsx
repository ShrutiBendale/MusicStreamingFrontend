import React from 'react'
import './songs.css'
// import Member from '../member/Member';

export default function Songs({ songs }) {

  return (
    <div className='songs-container'>
        {!songs ? (
            <p>No songs found! Try improving the search query...</p>
        ) : (
            // <h4>{songs ? songs[0].title : "abc"} </h4>
            // <ul>
            //     <li>{songs[0].title}</li>
            //     <li>{songs[1].title}</li>
            // </ul>
            <ul>
              {songs.map((el) => (
                  <li>{el.title}</li>
              ))}
            </ul> 
        )}
    </div> 
  )
}

