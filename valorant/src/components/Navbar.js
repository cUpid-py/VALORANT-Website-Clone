import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-bg">
        <div className="navbar-logo">
          <a
            className="riotbar-logo"
            href="https://playvalorant.com/en-us/"
            data-interaction-id="riotbar_app-switcher_riot-logo"
          >
            <span class="riot-bar-fist-logo"></span>
            <svg width="8" height="5" class="non-hover drop" viewBox="0 0 8 5">
              <path
                d="M.707 1.707l2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"
                fill="#7E7E7E"
              ></path>
            </svg>
            <svg width="8" height="5" class="hover drop" viewBox="0 0 8 5">
              <path
                d="M.707 1.707l2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"
                fill="#fff"
              ></path>
            </svg>
            <div id="riotbar-pip-container">
              <div id="riotbar-pip">
                <div id="riotbar-pip-pulse"></div>
              </div>
            </div>
          </a>
          <span class="riot-bar-fist-logo"></span>
          <div className="vl"></div>
        </div>

        <div className="navbar-items">
          <ul>
            <li>
              <a href="#">GAMEINFO </a>
            </li>

            <li>
              <a href="#">MEDIA </a>
            </li>

            <li>
              <a href="#">NEWS </a>
            </li>

            <li>
              <a href="#">LEADERBOARDS </a>
            </li>

            <li>
              <a href="#">SUPPORT </a>
            </li>

            <li>
              <a href="#">OUR SOCIALS </a>
            </li>

            <li>
              <a href="#">EFFORTS </a>
            </li>
          </ul>
        </div>

        <div className="navbar-cta">
          <button>
            <a href="#">PLAY NOW </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
