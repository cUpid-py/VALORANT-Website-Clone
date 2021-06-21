import React from 'react'
import "./News.css"
import reyna from "../assets/reyna.jpeg"
import hero from "../assets/hero1.jpeg"
import gun from "../assets/gun.jpeg"

const News = () => {
    return (
        <div className="n-master" >
                <div className="n-main" >

                    <div className="n-text" >
                        <p> LATEST NEWS</p>   
                        <a href="#"> Go to the next page</a>                   
                    </div>
                    
                    <div className="n-images" >
                        <div className="n1" >
                            <img src={reyna} alt="hero" height="203" width="340" />
                            <h5>06/18/21  <span>DEV</span> </h5>
                            <h3>Then Came the Breeze // Dev  <br /> Diaries - VALORANT</h3>                       
                        </div>

                        <div className="n1" >
                            <img src={hero} alt="hero" height="203" width="340" />
                            <h5>06/17/21  <span>ANNOUNCEMENTS</span> </h5>
                            <h3>VALORANT TEST ENVIRONMENT <br /> STARTS JULY 9</h3>   

                        </div>

                        <div className="n1" >
                            <img src={gun} alt="hero" height="203" width="340" />
                            <h5>06/18/21  <span>DEV</span> </h5>
                            <h3>Then Came the Breeze // Dev  <br /> Diaries - VALORANT</h3>   

                        </div>
                    </div>
                
            </div>
            
            
        </div>

        
    )
}

export default News



