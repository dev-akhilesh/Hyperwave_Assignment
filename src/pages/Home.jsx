import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Home = () => {
    const homeStyles = {
        background: '#101010',
        paddingTop: '30px',
        color: 'white',
        maxWidth: '425px',
        width: '420px',
        height: '150vh', 
    };

    return (
        <div style={homeStyles} className="home">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Home;
