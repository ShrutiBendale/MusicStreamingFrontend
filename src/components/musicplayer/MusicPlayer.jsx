import React from 'react'
import './musicPlayer.css'
import PlaceholderAlbumArt from '../../assets/placeholder-album-art.png'
import { MdPlayArrow, MdPause, MdSkipPrevious, MdSkipNext } from "react-icons/md";

function playPauseAudio() {
    var songAudio = document.getElementById("musicPlayerSongAudio");
    return songAudio.paused ? songAudio.play() : songAudio.pause();
  
  }

export default function MusicPlayer() {

    return (
        <div className="music-player-container">
            <img id="MusicPlayerAlbumArt" src={PlaceholderAlbumArt} alt="" />          
            <audio id="musicPlayerSongAudio" preload="auto" type="audio/mp3">
            </audio>                 
            <div className='song-controls '>
                {/*todo: add a seek bar and play/pause button*/}
                <a onClick={() => "" }><MdSkipPrevious size={40}/></a>
                <a onClick={() => playPauseAudio() } id='MusicPlayerPlayPause'><MdPlayArrow size={60}/></a>
                <a onClick={() => "" }><MdSkipNext size={40}/></a>
            </div>
            <div className='song-details' id="songDetails"> 
                <h2>Welcome!</h2>            
                <p>Select a song to play..</p>       
            </div>
        </div>
    );
}
 
