import React from 'react';
import YouTube from 'react-youtube';
import '../youtube/youtube.css';

export const Youtube = () => {
  const videoId = 'R0w72YEu2Jw';

  const opts = {
    playerVars: {}
  };

  return (
    <div className="container-video-text">
      <div className="video-container">
        <div className="container-title-video">
          <h3 className='video-title'>Historias que nos inspiran</h3>
        </div>
        <div className="youtube-responsive">
          <YouTube
            className="youtube-player"
            videoId={videoId}
            opts={opts}
          />
        </div>
        <h4>Todos los derechos reservados ©</h4>
      </div>
    </div>
  );
};
