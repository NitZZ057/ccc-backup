import { NavLink } from "react-router-dom";

import { FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";

//Image Import
import group2 from "../assests/Group 2.png";

const Layout = (props) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div>
      <div className="bottomSetter">
        <div className="top-wrapper">
          <div className="navBar">
            <div className="navflex2">
              <NavLink to="/">
                <div className="navBarButtons">
                  <div>
                    <img src='/images/ccclogo.png' className="navBarImage" alt="CCCLogo" />
                  </div>
                </div>
              </NavLink>
              <NavLink to="/" title="home">
                <div className="navBarButtons">
                    Home
                </div>
              </NavLink>
              <NavLink to="/about" title="Hall of fame">
                <div className="navBarButtons">
                    Hall of Fame
                </div>
              </NavLink>
              <NavLink to="/events" title="events">
                <div className="navBarButtons">
                    Events
                </div>
              </NavLink>
              <NavLink to="/" title="team">
                <div className="navBarButtons" >
                    Team
                </div>
              </NavLink>
              <NavLink to="/about" title="about">
                <div className="navBarButtons">
                    About
                </div>
              </NavLink>



              {/* <a href="https://ccc-sjcem-hackathon-ideathon-2022.netlify.app/" title="events"> Events</a> */}

            </div>

            <div className="navflex2">
              <NavLink to="/" title="ccc">
                <div className="navBarButtons ccc" >
                    CCC
                </div>
              </NavLink>

            </div>
            <div className="navflex2">
              <NavLink to="/potd" title="potd">
                POTD<img className="potd-icon" src="/images/potd.png" alt="potd" />
              </NavLink>

              <NavLink to="/" title="sign up">
                <div className="navBarButtons login" >
                    Sign Up
                </div>
              </NavLink>
              <NavLink to="/" title="login">
                <div className="navBarButtons login" title="login">
                    Login
                </div>
              </NavLink>

            </div>
          </div>

          {/* <div className="headerContainer">
            <img
              src={group2}
              className="headerContainerImage"
              alt="CCCLogoText"
            />
          </div> */}
        </div>
      </div>
      <div className="children">{props.children}</div>
      <footer>
        <div>
          <span className="footerText">Find us</span>
          <br />
          <br />
          <div className="flex">
            <img src={group2} className="footerLogo" alt="cccLogo" />
            <a
              href="https://instagram.com/ccc_sjcem?igshid=YmMyMTA2M2Y="
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footerLogo" />
            </a>
            <a
              href="https://discord.gg/tx6ddyPEud"
              title="Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="footerLogo" />
            </a>
            <a
              href="http://www.linkedin.com/in/competitive-coding-club-ccc"
              title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footerLogo" />
            </a>
            <br />
            <br />
          </div>
          © 2021-<span id="curYear">{currentYear}</span> Competitive Coding
          Club. All rights reserved.
        </div>
        <div>
          <p>Web Developed By Om Bhamare & Saurabh Thakur</p>
        </div>
      </footer>

    </div>
  );
};

export default Layout;


