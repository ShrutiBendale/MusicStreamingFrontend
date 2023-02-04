import React from 'react'
import './musicPlayer.css'
import PlaceholderAlbumArt from '../../assets/lumineers-album-art.png'
import { MdPlayArrow, MdPause, MdSkipPrevious, MdSkipNext } from "react-icons/md";

export default function MusicPlayer() {

    return (
        <div className="music-player-container">
            <img src={PlaceholderAlbumArt} alt="" />                           
            <div className='song-details'>
                    <h2>Angela</h2>
                    <p>The Lumineers</p>
            </div>
            <div className='song-controls '>
                {/*todo: add a control bar and play/pause button*/}
                <a onClick={() => "" }><MdSkipPrevious/></a>
                <a onClick={() => "" }><MdPlayArrow/></a>
                <a onClick={() => "" }><MdSkipNext/></a>
            </div>
        </div>
    );
}
 
