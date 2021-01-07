import React from 'react'
import './About.css';

export default function About() {
    return (
        <div className="about-container">
            <div className="inner-cont">
                <div className="col">
                    <div className="avatar">
                        <div className="avatar-image">
                            <img style={{ height: '100%' }} src="https://cdn.dribbble.com/users/2009763/screenshots/3982411/02.gif" alt="avatar" />
                        </div>
                        <div className="avatar-name">
                            <strong className="str">Wajahat Abbas</strong>, Web App Developer
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="about-text">
                        <h3 className="headingh3">About</h3>
                        <p>My copywriting and UX writing draws on abilities developed in the psychological sciences.</p>
                        <p>Expertise in visual perception, behavioral motivation, and decision-making allows me to engineer words that convert customers and guide users.</p>

                    </div>
                </div>
            </div>
        </div>

    )
}
