import React from "react";
import "./Agents.css";
import Raze from "../assets/raze-reyna.png";

const Agents = () => {
  return (
    <div>
      <div className="agents-sec">
        <div className="agents-img">
          <img src={Raze} alt="" />
        </div>

        <div className="agents-text">
          <h1 className="head">
            YOUR <br /> AGENTS
          </h1>

          <h3>CREATIVITY IS YOUR GREATEST WEAPON.</h3>

          <p className="head-p">
            More than guns and bullets, you’ll choose an Agent <br /> armed with
            adaptive, swift, and lethal abilities that <br /> create
            opportunities to let your gunplay shine. No <br /> two Agents play
            alike, just as no two highlight reels <br /> will look the same.
          </p>

          <div className="cta-2">
            <button>
              <a href="#">VIEW ALL AGENTS</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
