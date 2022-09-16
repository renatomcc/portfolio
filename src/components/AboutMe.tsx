import React from 'react'
import '../styles/AboutMe.sass'
import 'aos/dist/aos.css'

export const AboutMe = () => {
    return (
        <div className="aboutme"
            data-aos="fade-left"
            data-aos-delay="100"
            id='AboutMe'
        >
            <div className="aboutMeTitle">
                <span>About Me</span>
            </div>
            <div className="aboutMeContent">
                <div className="description">
                    <span> I'm a front-end developer that loves to create and learn new things everyday.
                        <br/>I had my first blog when i was 11yo and since them i never lost interest in this beautiful area, i hope you like what i have to show and maybe we can work together in the future!
                    </span>
                </div>
                <div className="picture">
                    <img src="https://i.ibb.co/pJ48rWw/Foto.png" alt="Profile Picture" />
                </div>
            </div>
        </div>
    )
}