import React, { useEffect, useState } from "react";
import '../styles/Welcome.sass'

export const Welcome = () => {
    return (
        <div className="welcome"
            data-aos="fade-right"
            data-aos-delay="500"
        >
            <h4>Hello and welcome to my portfolio, my name is</h4>
            <h1>Renato Manfredinny</h1>
            <h3>And i'll be happy to show you some of my works :&#41;</h3>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=renattocasttro@gmail.com" target="_blank" id="getInTouchButton"> Get in touch! </a>
        </div>
    )
}