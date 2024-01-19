import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/CourseArticle.css";


const CourseArticle = ({ title, subtitle, mt, card }) => {
    const navigate = useNavigate();

    const navigateToPlayer = () => {
        navigate('/player');
    };

    return (
        <div className="course" style={{ marginTop: mt }}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="carousel">
                <div className="card_container">
                    {card?.map((item, index) => (
                        <div className="card" key={index} onClick={navigateToPlayer}>
                            <div style={{ background: item.background }}></div>
                            <h3>{item.subTitle}</h3>
                            <p>
                                {item.chapters} Chapters . {item.hours} Hours
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseArticle
