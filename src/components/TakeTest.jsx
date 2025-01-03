import React, { useRef, useState } from "react";

export default function TakeTest() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSpeedChange = (event) => {
    const wpm = parseFloat(event.target.value);
    const newRate = wpm / 100; // Convert WPM to playback rate
    setPlaybackRate(newRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  const handleProgressBarClick = (event) => {
    const boundingRect = event.target.getBoundingClientRect();
    const clickX = event.clientX - boundingRect.left;
    const newTime = (clickX / boundingRect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress((newTime / duration) * 100);
  };

  const handleReset = () => {
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    setProgress(0);
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="border-2 w-fit rounded-xl px-3 py-5">
      <img src="stenomate_logo.jpg" alt="" className="w-80"/>
      {/* Audio element to load the file */}
      <audio
        ref={audioRef}
        src="/audio.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      {/* Play/Pause Button */}
      <button
        className="btn text-white bg-blue-500 py-2 w-full  rounded-xl my-4"
        onClick={handlePlayPause}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      {/* Progress Bar */}
      <div
        className="w-full bg-gray-300 h-2 rounded-lg mt-4 cursor-pointer"
        onClick={handleProgressBarClick}
      >
        <div
          className="bg-blue-500 h-2 rounded-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Time Display */}
      <div className="flex justify-between text-sm mt-2">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
      {/* Reset Button */}
      <button
        className="btn text-white bg-gray-500 py-2 px-4 rounded-xl flex mx-auto mt-2"
        onClick={handleReset}
      >
        Reset
      </button>
      {/* Dropdowns */}
      <h2>Dictation Speed:</h2>
      <select
        name="dictationSpeed"
        id="dictationSpeed"
        className="border-2 rounded-lg"
        onChange={handleSpeedChange}
      >
        <option value="75">75 WPM</option>
        <option value="80">80 WPM</option>
        <option value="85">85 WPM</option>
        <option value="90">90 WPM</option>
        <option value="95">95 WPM</option>
        <option value="100">100 WPM</option>
        <option value="105">105 WPM</option>
        <option value="110">110 WPM</option>
        <option value="115">115 WPM</option>
        <option value="120">120 WPM</option>
        <option value="125">125 WPM</option>
        <option value="130">130 WPM</option>
        <option value="135">135 WPM</option>
        <option value="140">140 WPM</option>
        <option value="145">145 WPM</option>
        <option value="150">150 WPM</option>
        <option value="155">155 WPM</option>
        <option value="160">160 WPM</option>
      </select>
      <h2>Fluctuation Level:</h2>
      <select
        className="border-2 rounded-lg"
        name="fluctuation"
        id="fluctuation"
      >
        <option value="off">Off</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {/* Transcription Button */}
      <button className="btn text-white bg-red-500 py-2 px-4 rounded-xl flex mx-auto">
        Transcribe Now
      </button>
    </div>
  );
}
