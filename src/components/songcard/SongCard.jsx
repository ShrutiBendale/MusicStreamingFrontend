import React from 'react'
import './songCard.css'
import { BsPlayCircle } from "react-icons/bs";

function updateMusicPlayerInfo(songInfo) {
  // var songAudio = document.getElementsByClassName("music-player-container");
  window.songInfo = songInfo;
  var musicPlayerSongAudio = document.getElementById("musicPlayerSongAudio");
  musicPlayerSongAudio.src = songInfo.songURL;
  // console.log(musicPlayerSongAudio);

  var musicPlayerPlayPause = document.getElementById("MusicPlayerPlayPause");
  // console.log(MusicPlayerPlayPause);
  musicPlayerPlayPause.click();

  var musicPlayerAlbumArt = document.getElementById("MusicPlayerAlbumArt");
  musicPlayerAlbumArt.src = songInfo.AlbumArtUrl;

  var songDetais = document.getElementById("songDetails");
  songDetais.innerHTML = `<h2>${songInfo.songName}</h2> <p>${songInfo.artistName}</p>`;

}

const SongCard = ({songInfo}) => {
  return (
    <div className='song-card'>
        <li className="card">
            <div>
            <div className='card-icon'>
                  <a onClick={() => updateMusicPlayerInfo(songInfo)} id="playPauseIcon"><BsPlayCircle  size={40} /></a>
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