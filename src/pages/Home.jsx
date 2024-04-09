import React from "react";

// STYLES
import "../styles/home.css";

// ICONS
import { GoDotFill } from "react-icons/go";
import { BsPinFill } from "react-icons/bs";

// IMAGES
import atp from "../assets/atp.png";
import live from "../assets/live.png";
import flag1 from "../assets/flag1.png";
import flag2 from "../assets/flag2.png";
import flag3 from "../assets/flag3.png";
import flag4 from "../assets/flag4.png";
import flag5 from "../assets/flag5.png";
import flag6 from "../assets/flag6.png";
import flag7 from "../assets/flag7.png";
import flag8 from "../assets/flag8.png";
import flag9 from "../assets/flag9.png";
import flag10 from "../assets/flag10.png";
import flag11 from "../assets/flag11.png";
import flag12 from "../assets/flag12.png";
import flag13 from "../assets/flag13.png";

const Home = () => {
  return (
    <div className="liveScore">
      <div className="liveNumberContainer">
        <div className="liveNumberBox">
          <p className="liveAllButton">All</p>
          <div className="live">
            <GoDotFill className="liveDotLogo" />
            <p className="liveNumber">
              LIVE <span className="number">(12)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="scoresMainContainer">
        <div className="scoreDetals">
          <div className="scoreLeftCol">
            <img
              src={atp}
              alt=""
              style={{ marginTop: "auto", marginBottom: "auto" }}
            />
          </div>
          <div className="scoreCenterCol paddingRight">
            <div className="scoreCenterLeftCol">
              <div>
                <p className="greyScore smallText">ATP 250</p>
                <p className="qualifyingCountry smallText whiteText">
                  Estorial, Portugal, Qualifying
                </p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <p className="greyScore smallText">Red clay</p>
            </div>
          </div>
          <div className="scoreRightCol">
            <BsPinFill
              style={{ color: "#6FFB78" }}
              className="scoreRightLogo"
            />
          </div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                12:00
              </p>
              <p style={{ color: "#E73B3B" }} className="smallText fontSegeio">
                2nd set
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag1} alt="" />
                <img src={flag2} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Faria J.</p>
                <p className="fontSegeio">Valkusz M.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>1</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  1.05
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>2</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  11.00
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#E73B3B" }}>1</p>
                <p
                  style={{
                    color: "#E73B3B",
                    background: "transparent",
                    border: "none",
                  }}
                  className="scoreBg"
                >
                  0
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol">
            <img
              src={live}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
          </div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                12:00
              </p>
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                FT
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag3} alt="" />
                <img src={flag1} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Klein L.</p>
                <p className="fontSegeio">Araujo P.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>1</p>
                <p
                  style={{ color: "#E8B345", border: "solid 1px #6FFB78" }}
                  className="scoreBg"
                >
                  1.08
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>2</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  8.00
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "white" }}>2</p>
                <p
                  style={{
                    color: "#737475",
                    background: "transparent",
                    border: "none",
                  }}
                  className="scoreBg"
                >
                  0
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol"></div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                13:00
              </p>
              <p style={{ color: "#E73B3B" }} className="smallText fontSegeio">
                2nd set
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag4} alt="" />
                <img src={flag5} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Kukushkin M.</p>
                <p className="fontSegeio">Jorda Sanchis D.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>1</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  3.25
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>2</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  1.33
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#E73B3B" }}>0</p>
                <p
                  style={{
                    color: "#E73B3B",
                    background: "transparent",
                    border: "none",
                  }}
                  className="scoreBg"
                >
                  1
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol">
            <img
              src={live}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
          </div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                13:20
              </p>
              <p style={{ color: "#E73B3B" }} className="smallText fontSegeio">
                Canceled
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag6} alt="" />
                <img src={flag1} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Kopriva V.</p>
                <p className="fontSegeio">Vale D.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>1</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  1.14
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>2</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  5.50
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol"></div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                13:20
              </p>
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                -
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag7} alt="" />
                <img src={flag5} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Vanshelboim E.</p>
                <p className="fontSegeio">Liamas Ruiz P.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>1</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  3.50
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>2</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  1.29
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol"></div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                13:00
              </p>
              <p style={{ color: "#E73B3B" }} className="smallText fontSegeio">
                2nd set
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag8} alt="" />
                <img src={flag1} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Jebens H.</p>
                <p className="fontSegeio">Vale D.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#E73B3B" }}>0</p>
                <p
                  style={{
                    color: "#E73B3B",
                    background: "transparent",
                    border: "none",
                  }}
                  className="scoreBg"
                >
                  0
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol">
            <img
              src={live}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
          </div>
        </div>

        <hr
          style={{
            border: "solid 1px #393B3B",
            marginTop: "3px",
            marginBottom: "5px",
          }}
        />

        <div className="scoreDetals">
          <div className="scoreLeftCol">
            <img
              src={atp}
              alt=""
              style={{ marginTop: "auto", marginBottom: "auto" }}
            />
          </div>
          <div className="scoreCenterCol paddingRight">
            <div className="scoreCenterLeftCol">
              <div>
                <p className="greyScore smallText">ATP 250</p>
                <p className="qualifyingCountry smallText whiteText">
                  Houston, USA, Qualifying
                </p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <p className="greyScore smallText">Red clay</p>
            </div>
          </div>
          <div className="scoreRightCol">
            <BsPinFill
              style={{ color: "#6FFB78" }}
              className="scoreRightLogo"
            />
          </div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                16:00
              </p>
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                -
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag9} alt="" />
                <img src={flag10} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Boyer T.</p>
                <p className="fontSegeio">Brouwer G.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>1</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  1.83
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>2</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  1.83
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol"></div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                12:00
              </p>
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                -
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag11} alt="" />
                <img src={flag9} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Diallo G.</p>
                <p className="fontSegeio">Krueger M.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>1</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  1.57
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>2</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  2.25
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol"></div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                17:20
              </p>
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                -
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag9} alt="" />
                <img src={flag12} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Rybakov A.</p>
                <p className="fontSegeio">Ritschard A.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>1</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  3.00
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>2</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  1.36
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol"></div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                18:40
              </p>
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                -
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag13} alt="" />
                <img src={flag9} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Vacherot V.</p>
                <p className="fontSegeio">Quinn E.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>1</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  1.57
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>2</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  2.25
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol"></div>
        </div>
        <div className="scoreDetals">
          <div
            style={{ borderRight: "solid 2px #393B3B" }}
            className="scoreLeftCol"
          >
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                18:40
              </p>
              <p style={{ color: "#737475" }} className="smallText fontSegeio">
                -
              </p>
            </div>
          </div>
          <div className="scoreCenterCol paddingRight paddingLeft">
            <div className="scoreCenterLeftCol">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <img src={flag9} alt="" />
                <img src={flag9} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
                className="fontSegeio"
              >
                <p className="fontSegeio">Holt B.</p>
                <p className="fontSegeio">Damm M.</p>
              </div>
            </div>
            <div className="scoreCenterRightCol">
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>1</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  2.50
                </p>
              </div>
              <div
                className="smallText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#737475" }}>2</p>
                <p style={{ color: "#E8B345" }} className="scoreBg">
                  1.50
                </p>
              </div>
            </div>
          </div>
          <div className="scoreRightCol"></div>
        </div>

        <hr
          style={{
            border: "solid 1px #393B3B",
            marginTop: "3px",
            marginBottom: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
