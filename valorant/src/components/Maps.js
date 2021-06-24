import React from 'react'
import "./Maps.css"
import map from "../assets/maps.png"

const Maps = () => {
    return (
        <div>
            <div className="maps-main" >
              

                <div className="maps-text" >
                    <hr/>

                    <h1>YOUR MAPS</h1>
                    <h3>FIGHT AROUND THE WORLD</h3>
                    <p className="map-graph" >Each map is a playground to showcase your creative <br /> thinking. 
                    Purpose-built for team strategies, <br /> spectacular plays, and clutch moments. 
                    Make the <br /> play others will imitate for years to come.</p>
                </div>

                <div className="cta-3" >
                        <a href=""><button>VIEW ALL AGENTS</button></a> 
                </div>

                <div className="map-img" >
                    {/* <img src={map} alt="map" />           */}
                </div>

            </div>
           
            
        </div>
    )
}

export default Maps
