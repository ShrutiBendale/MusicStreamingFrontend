import React from 'react'
import './songCard.css'
import { BsPlayCircle } from "react-icons/bs";

const SongCard = ({songInfo}) => {
  return (
    <div className='song-card'>
        <li className="card">
            <div>
            <div className='card-icon'>
                  <a onClick={() => "" }><BsPlayCircle  size={40} /></a>
              </div>

              <h4 className="card-title">{songInfo.songName}</h4>
              <div className="card-content">
                <div className="card-text">
                  <p>{songInfo.artistName}</p>
                </div>
              </div> 
            </div>
        </li>
    </div>
    
  )
}

export default SongCard