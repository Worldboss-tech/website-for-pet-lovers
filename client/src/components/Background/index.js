import React from "react";
import "./style.css";

function Background({ src }) {
    return (
        <div>
            <div className="video-container">
                <video autoPlay="autoplay" muted loop="loop" className="cover-video">
                    <source src={src} type="video/mp4" />
                </video>
            </div>
            <div className="overlay">
            </div>
        </div>
    )
}

export default Background;