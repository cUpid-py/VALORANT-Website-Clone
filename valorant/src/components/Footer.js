import React from 'react'
import "./Footer.css"
import riot from "../assets/riot.png"
import german from "../assets/german.png"
import age from "../assets/age.jpg"

const Footer = () => {
    return (
        <div>

            <div className="footer-main-sec" >

                <div className="footer-1" >

                    <p>DOWNLOAD GAME CONTENT</p>
                    <img src={riot} alt="" />

                    <div>
                        <a href="#"> <img src={german} alt="" height="30px" width="30px" />  </a>
                        <a href="#"> <img src={german} alt="" height="30px" width="30px" />  </a>
                        <a href="#"> <img src={german} alt="" height="30px" width="30px" />  </a>
                        <a href="#"> <img src={german} alt="" height="30px" width="30px" />  </a>
                        <a href="#"> <img src={german} alt="" height="30px" width="30px" />  </a>
                
                    </div>

                </div>

                <div className="footer-2" >

                    <p>© 2021 Riot Games, Inc. Riot Games, VALORANT, and any associated logos are <br />
                    trademarks, service marks, and/or registered trademarks of Riot Games, Inc.</p>

                    <div className="footer-links" >
                        <a href="#">Privacy Notice</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Preferences</a>

                    </div>

                    

                    <div className="fin-footer" >
                        <img src={age} alt="riot" />

                        <h5>Blood  <br /> Language <br /> Violence <br />Users-interact <br />In-game urchases </h5>


                    </div>

                </div>

            
            </div>

            
        </div>
    )
}

export default Footer
