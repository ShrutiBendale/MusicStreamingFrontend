import React from 'react'
import './songCard.css'
const SongCard = ({songInfo}) => {
  return (
    <div className='song-card'>
        <li className="card">
            <div>
              <h4 className="card-title">{songInfo.title}</h4>
              <div className="card-content">
                {/* <div className="card-play-icon"> */}
                    {/* <a href="" className="card-link">Live Demo</a> */}
                {/* </div>  */}
                <div className="card-text">
                  <p>{songInfo.description}</p>
                </div>
              </div> 
            </div>
        </li>
    </div>
    
  )
}

export default SongCard