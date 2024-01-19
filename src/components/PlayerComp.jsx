import React, { useEffect, useRef, useState } from "react";
import "../styles/PlayerComp.css";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import audio1 from "../assets/audio1.mp3";
import share from "../assets/share.svg";
import downArrow from "../assets/downArrow.svg";
import rectangle from "../assets/rectangle.svg";
import chapter from "../assets/chapter.svg";
import previous from "../assets/previous.svg";
import fast_backward from "../assets/fast_backward.svg";
import fast_forward from "../assets/fast_forward.svg";
import next from "../assets/next.svg";
import time from "../assets/Time.svg";
import RightSide from "../assets/RightSide.svg";
// import "../styles/Header.css";


export default function PlayerComp() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };


    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    const formatDuration = (durationSeconds) => {
        const min = Math.floor(durationSeconds / 60);
        const sec = Math.floor(durationSeconds % 60);
        const formattedSec = sec.toString().padStart(2, "0");
        return `${min}:${formattedSec}`;
    };

    return (
        <div className="player">
            <div className="home-indicator">
                <img className="right-side-icon" alt="" src={RightSide} />
                <img className="left-side-icon" alt="" src={time} />
            </div>
            <nav className="nav">
                <img src={downArrow} alt="" />
                <img src={share} alt="" />
            </nav>
            <div className="main">
                <img
                    src={rectangle}
                    alt=""
                />
                <h1>Fundamentals of Product Design</h1>
                <p>Chapter 2 - What is Product Design?</p>
                <div className="btn">
                    <button>View Chapter Notes</button>
                    <button>Attempt Quiz</button>
                </div>
                <div className="audio">
                    <input
                        type="range"
                        name=""
                        id=""
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                    />
                    <audio src={audio1} ref={audioRef} />
                    <div className="duration">
                        <p>{formatDuration(currentTime)}</p>
                        <p>{formatDuration(duration)}</p>
                    </div>
                    <div className="controller">
                        <img src={previous} alt="" />
                        <div
                            onClick={() => {
                                if (currentTime - 15 > 0) {
                                    setCurrentTime(currentTime - 15);
                                } else {
                                    setCurrentTime(0);
                                }
                            }}
                        >
                            <img src={fast_backward} alt="" />

                            <p>15</p>
                        </div>
                        <button onClick={handlePlayPause}>
                            {isPlaying ? <IoMdPause /> : <IoMdPlay />}
                        </button>
                        <div
                            onClick={() => {
                                if (currentTime + 15 < duration) {
                                    setCurrentTime(currentTime + 15);
                                } else {
                                    setCurrentTime(duration);
                                }
                            }}
                        >
                            <img src={fast_forward} alt="" />
                            <p>15</p>
                        </div>
                        <img src={next} alt="" />
                    </div>
                </div>
            </div>
            <div className="btm">
                <img src={chapter} alt="" />
                <p>Chapters</p>
            </div>
        </div>
    );
}
