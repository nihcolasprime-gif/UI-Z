
import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden">
      {/* Video Element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="w-full h-full bg-zinc-900" />
      </video>

      {/* Global Glass Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
      ></div>
    </div>
  );
};

export default BackgroundVideo;
