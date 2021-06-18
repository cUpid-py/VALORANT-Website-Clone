import React from 'react'
import "./LandingPage.css"
import ValorantVid from "../assets/ValorantVid.mp4"
import ValorantLogo from "../assets/Valorant logo.png"

const LandingPage = () => {
    return (
        <div>
            <div className="lp" >

                <video  id="myVideo" autoPlay loop muted>
                    <source  src={ValorantVid} type="video/mp4" />
                </video>

                <div className="lp-text" > 
                    <p>A 5v5 character-based tactical shooter</p>                          
                </div>
                
                <div>
                    <img src={ValorantLogo} alt="" /> 
                </div>

                
                      
            </div>
            
        </div>
    )
}

export default LandingPage
