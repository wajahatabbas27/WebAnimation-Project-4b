import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './FirstComp.css'

export default function FirstComp() {

    const { ref } = useWebAnimations({
        keyframes: [
            { transform: "translateY(10px)", easing: "ease" },
            { transform: "translateY(-30px)" },
            { transform: "translateY(10px)", easing: "ease-out" }
        ],
        timing: {
            duration: 5000,
            iterations: Infinity,
            easing: "ease-in-out",
        }
    });

    return (
        <div className="container">

            <div className="title-first">

                <div className="title-1">
                    S.WAJAHAT
                </div>

                <div className="title-2">
                    ABBAS ZAIDI
                </div>

                <div className="parag">
                    Hi, my name is Syed Wajahat Abbas Zaidi and I am Web and Mobile Hybrib Application Developer.
                </div>

                <div className="button">
                    <button className="send">Send Message</button>
                </div>

            </div>

            <div className="animation">
                <img src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg" className="header-front" alt="front" />
                <img src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg" alt="front" />
                <img src="https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg" alt="brain" ref={ref} />
            </div>

        </div>
    )
}
