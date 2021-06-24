import React from 'react'
import "./LandingPage.css"
import ValorantVid from "../assets/ValorantVid.mp4"
import ValorantLogo from "../assets/Valorant logo.png"

const LandingPage = () => {
    return (
        <div className="lp-master" >
            <div className="lp" >

                <video  id="myVideo" autoPlay loop muted >
                    <source  src={ValorantVid} type="video/mp4" />
                </video>

                <div className="lp-items" > 
                    <p>A 5v5 character-based tactical shooter</p>    

                    <img src={ValorantLogo} alt="" />                      
                </div>
                      
            </div>
            <div className="cta" >
                <a href=""><button>PLAY FREE</button></a> 
            </div>

            <div className="vl-1" ></div>              
            
        </div>
    )
}

export default LandingPage
