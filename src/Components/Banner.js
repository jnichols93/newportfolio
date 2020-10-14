import React from 'react';
import Typed from "react-typed";
import '../Styles/Banner.scss'
function Banner() {
    return (
        <div className="banner">
            <section className="banner__text">
                <h1 className="banner__greeting">Greeting</h1>
                <Typed
          strings={[
            "Web Developer",
            "Software Engineer",
            "Blockchain Enthusiast",
            "Cyber Security Hobbyist",
            "Dog Dad",
          ]}
          typeSpeed={33}
          backSpeed={69}
          loop
        />
            </section>
            <img
            className="banner__image"
            src="https://justin-nichols.codes/static/media/profilePic.e049cfb6.png"
            alt="A very cool guy"/>
            
        </div>
    )
}

export default Banner
