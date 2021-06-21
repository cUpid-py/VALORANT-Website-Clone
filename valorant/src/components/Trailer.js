import React from 'react'
import "./Trailer.css"
import trailer from "../assets/trailer.jpg"

const Trailer = () => {
    return (
        <div className="trailer-main" >
            <div>
                <h1>WE ARE VALORANT</h1>
            </div>
            <div className="t1" >
                <div className="t1-text" >
                    <h3>DEFY THE LIMITS</h3>
                    <h5>Blend your style and experience on a  <br /> global,
                    competitive stage. You have 13 <br /> rounds to attack and defend your
                    side <br /> using sharp gunplay and tactical <br /> abilities. And, with one life per-round, <br /> 
                    you'll need to think faster than your  <br /> opponent if you want to survive. 
                    Take <br /> on foes across Competitive and <br /> Unranked modes as <br /> well as Deathmatch
                    and Spike Rush.</h5>

                    <h5><span>Watch the gameplay trailer</span></h5>

                </div>
                <div className="t1-img" >  
                    <img src={trailer} alt="trailer" width="657" height="369" />

                </div>
            </div>
            
        </div>
    )
}

export default Trailer
