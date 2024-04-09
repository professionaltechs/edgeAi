import React from "react";

// STYLES
import "../styles/layout/sidebar.css";

// ICONS
import { FaAngleDown } from "react-icons/fa6";

// IMAGES
import logo from "../assets/logo.png";
import sidebar1 from "../assets/sidebar1.png";
import sidebar2 from "../assets/sidebar2.png";
import sidebar3 from "../assets/sidebar3.png";
import sidebar4 from "../assets/sidebar4.png";
import sidebar5 from "../assets/sidebar5.png";

import tournament1 from "../assets/sidebar/tournament1.png";
import tournament2 from "../assets/sidebar/tournament2.png";
import tournament3 from "../assets/sidebar/tournament3.png";
import tournament4 from "../assets/sidebar/tournament4.png";
import tournament5 from "../assets/sidebar/tournament5.png";
import tournament6 from "../assets/sidebar/tournament6.png";
import tournament7 from "../assets/sidebar/tournament7.png";
import tournament8 from "../assets/sidebar/tournament8.png";
import tournament9 from "../assets/sidebar/tournament9.png";
import tournament10 from "../assets/sidebar/tournament10.png";

const Sidebar = () => {
  return (
    <div className="sidebarMain">
      <img src={logo} alt="" className="logo" />
      <div className="sidebarButtonsContainer">
        <div className="sidebarButton" style={{ background: "#6FFB78" }}>
          <img src={sidebar1} alt="" />
          <p style={{ color: "#000" }}>Home</p>
        </div>
        <div className="sidebarButton">
          <img src={sidebar2} alt="" />
          <p>Large Bets</p>
        </div>
        <div className="sidebarButton">
          <img src={sidebar3} alt="" />
          <p>Live Medical Time Out (MTO)</p>
        </div>
        <div className="sidebarButton">
          <img src={sidebar4} alt="" />
          <p>Odds Drop</p>
        </div>
        <div className="sidebarButton">
          <img src={sidebar5} alt="" />
          <p>Statistical Alerts (Live) </p>
        </div>
      </div>
      <div className="sidebarTournamentsContainer">
        <h5 className="tournamentsHeading">Tournaments</h5>
        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament1} alt="" />
              <p>ATP</p>
            </div>
            <div className="tournamentData">
              <p className="tournamentDataRatio">3/18</p>
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>

        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament2} alt="" />
              <p>Billie Jean King Cup</p>
            </div>
            <div className="tournamentData">
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>

        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament3} alt="" />
              <p>Challenger</p>
            </div>
            <div className="tournamentData">
              <p className="tournamentDataRatio">3/15</p>
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>

        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament4} alt="" />
              <p>Challenger Women</p>
            </div>
            <div className="tournamentData">
              <p className="tournamentDataRatio" style={{color: '#7E7D7D'}}>7</p>
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>

        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament5} alt="" />
              <p>Davis Cup</p>
            </div>
            <div className="tournamentData">
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>

        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament6} alt="" />
              <p>Grand Slam</p>
            </div>
            <div className="tournamentData">
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>

        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament7} alt="" />
              <p>In Progress</p>
            </div>
            <div className="tournamentData">
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>

        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament8} alt="" />
              <p>ITF Men</p>
            </div>
            <div className="tournamentData">
              <p className="tournamentDataRatio">2/40</p>
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>

        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament8} alt="" />
              <p>ITF Women</p>
            </div>
            <div className="tournamentData">
              <p className="tournamentDataRatio">4/35</p>
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>

        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament9} alt="" />
              <p>United Cup</p>
            </div>
            <div className="tournamentData">
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>

        <div className="tournamentListContainer">
          <div className="tournamentItem">
            <div className="tournamentName">
              <img src={tournament10} alt="" />
              <p>WTA</p>
            </div>
            <div className="tournamentData">
            <p className="tournamentDataRatio" style={{color: '#7E7D7D'}}>26</p>
              <FaAngleDown className="tournamentDataDownIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
