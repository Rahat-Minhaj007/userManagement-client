import React from 'react';
import Nav from '../../shared/Nav/Nav';
import './Home.css';
import Typical from 'react-typical'

const Home = () => {
    return (
        <div className="home-content">
            <Nav />
            <div className="home-text">
                <h1>Welcome to Suffix IT</h1>
                <p>
                    <Typical
                        steps={[

                            'The Ultimate Solution is Here', 3000,
                            '', 1000,



                        ]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </p>

            </div>
        </div>
    );
};

export default Home;