import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideos from "../hooks/useTrailerVideos";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // Custom Hook
  useTrailerVideos(movieId);

  return (
    <div>
      <iframe
        className="w-full aspect-video mt-10 md:mt-0"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&enablejsapi=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
