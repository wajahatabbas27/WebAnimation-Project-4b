import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import FirstComp from './FirstComp';
import './Appbar.css';

export default function Appbar() {

    const { ref, getAnimation } = useWebAnimations({

        autoPlay: false,

        keyframes: [
            { transform: "translate(300px)" },
            { transform: "translate(-130px)" },
        ],

        timing: {
            duration: 1000,
            easing: "ease-out",
            iterations: 1
        },

        onUpdate: ({ animation }) => {
            if (animation.currentTime > animation.effect.getTiming().duration / 2)
                getAnimation().pause();
        },
    });

    const start = () => {
        getAnimation().play();
    }

    const stop = () => {
        getAnimation().cancel();
    }


    return (
        <div>
            <div className="nav">
                <button className="btn" onClick={start}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
            </div>

            <FirstComp />

            <nav ref={ref}>

                <button className="btn-cross" onClick={stop} >
                    <i className="fa fa-times fa-2x" style={{ marginLeft: "-10px" }} aria-hidden="true"></i>
                </button>

                <div className="logo">

                    <img src="http://venomaz.surge.sh/landing%20page/img/83248461_1101889940176762_3027484561043881984_o.jpg" alt="pic" />

                    <center><h3 style={{ color: "white" }}>Wajahat Abbas</h3></center>
                    <center><p style={{ color: "white" }}>Software Engineer</p></center>

                </div>

                <ul>
                    <li><a href="https://www.linkedin.com/in/wajahat-abbas-084352194/">Home</a></li>
                    <li><a href="https://www.linkedin.com/in/wajahat-abbas-084352194/">About</a></li>
                    <li><a href="https://www.linkedin.com/in/wajahat-abbas-084352194/">Contact</a></li>
                    <li><a href="http://venomaz.surge.sh/">Portfolio</a></li>
                </ul>

            </nav>

        </div>
    )
}
