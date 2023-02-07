import React from 'react'
import './musicPlayer.css'
// import PlaceholderAlbumArt from '../../assets/lumineers-album-art.png'
import { MdPlayArrow, MdPause, MdSkipPrevious, MdSkipNext } from "react-icons/md";

export default function MusicPlayer() {

    return (
        <div className="music-player-container">
            <img src='https://melodize-album-art.s3.amazonaws.com/MagicAlbumArt.png' alt="" />                           
            <div className='song-controls '>
                {/*todo: add a control bar and play/pause button*/}
                <a onClick={() => "" }><MdSkipPrevious size={40}/></a>
                <a onClick={() => "" }><MdPlayArrow size={60}/></a>
                <a onClick={() => "" }><MdSkipNext size={40}/></a>
            </div>
            <div className='song-details'>
                    <h2>Magic</h2>
                    <p>Coldplay</p>
            </div>
        </div>
    );
}
 
