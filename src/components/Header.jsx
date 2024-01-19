import React from 'react'
import "../styles/Header.css";
import time from "../assets/Time.svg";
import RightSide from "../assets/RightSide.svg";
import profile from "../assets/profile.svg";
import discord from "../assets/discord.svg";


const Header = () => {
    return (
        <div>
            <div className="home-indicator">
                <img className="right-side-icon" alt="" src={RightSide} />
                <img className="left-side-icon" alt="" src={time} />
            </div>
            <div className="you-have-3">It’s a nice day to learn something new</div>
            <div className="hi-anirudh">
                <span>{`Hey `}</span>
                <span className="anirudh">Anirudh</span>
                <span> 👋</span>
            </div>
            <div className="search">
                <div className="search1">Join and help us in building Airvoice!</div>
            </div>
            <div className="rectangle-parent">
                <div className="rectangle1" />
                <div className="search-parent">
                    <div className="search2">Community</div>
                    <img className="discord-icon" alt="" src={discord} />
                </div>
            </div>
            <img className="profile" alt="" src={profile} />
        </div>
    )
}

export default Header
