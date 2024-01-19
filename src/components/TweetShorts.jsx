import React from 'react'
import "../styles/TweetShorts.css";
import tweet1 from "../assets/tweet1.svg";
import tweet2 from "../assets/tweet2.svg";

const card = [
    {
        name: "Shreyas Doshi",
        img: tweet1,
        background: "linear-gradient(297deg, #db804b 8.25%, #F7CE68 91.76%)",
        subtitle: "Fundamentals of Product Design",
        tag: "Product",
    },
    {
        name: "Akhilesh Takawale",
        img: tweet2,
        background: "linear-gradient(297deg, #127fec 8.25%, #21c5ee 91.76%)",
        subtitle: "Fundamentals of Product Design",
        tag: "Product",

    },
];

const TweetShorts = ({ mt }) => {
    return (
        <div className="course" style={{ marginTop: mt }}>
            <h1>Tweet Shorts</h1>
            <p>Listen to audio versions of tweet threads</p>
            <div className="carousel">
                <div className="card_container">
                    {card?.map((item, index) => (
                        <div className="tweet" key={index}>
                            <img
                                src={item.img}
                                alt=""
                                style={{ background: item.background }}
                            />
                            <div>
                                <span>{item.tag}</span>
                                <h3>{item.subtitle}</h3>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TweetShorts