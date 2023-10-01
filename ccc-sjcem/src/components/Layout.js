import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from '../context/auth'

import { FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";

const Layout = (props) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const [auth, setAuth] = useAuth();
  const menu = useRef(null);
  const navbar = useRef(null);
  const cross = useRef(null);

  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem("auth");
  }

  const showMenu = () => {
    navbar.current.style.display = "flex";
    menu.current.style.display = "none";
  }

  const hideMenu = () => {
    navbar.current.style.display = "none";
    menu.current.style.display = "flex";
  }

  return (
    <div>
      <div className="bottomSetter">
        <div className="top-wrapper">
          <div ref={menu} className="menu-div">
            <div>
              <img src='/images/logo.png' className="navBarImage" alt="CCCLogo" />
            </div>
            <img onClick={showMenu} className="menu" src="/images/menu.png" /></div>
          <div ref={navbar} className="navBar">
            <img onClick={hideMenu} className="cross" src='/images/xw.png' />
            <div className="navflex2 nav-lf">
              <NavLink to="/">
                <div className="">
                  <div>
                    <img src='/images/logo.png' className="navBarImage ccc-logo" alt="CCCLogo" />
                  </div>
                </div>
              </NavLink>

              {/* <NavLink to="/" title="ccc">
                <div className="navBarButtons ccc" >
                  CCC
                </div>
              </NavLink>  */}

              {/* <NavLink to="/" title="home">
                <div className="navBarButtons">
                  Home
                </div>
              </NavLink> */}



              {/* <NavLink to="/events" title="events">
                <div className="navBarButtons">
                  Events
                </div>
              </NavLink> */}


              {/* <NavLink to="/about" title="team">
                <div className="navBarButtons" >
                  Team
                </div>
              </NavLink> */}


              {/* <NavLink to="/about" title="about">
                <div className="navBarButtons">
                  About
                </div>
              </NavLink> */}



              {/* <a href="https://ccc-sjcem-hackathon-ideathon-2022.netlify.app/" title="events"> Events</a> */}

            </div>

            <div className="navflex2 nav-mid">
              {/* <NavLink to="/">
                <div className="navBarButtons">
                  <div>
                    <img src='/images/logo.png' className="navBarImage ccc-logo" alt="CCCLogo" />
                  </div>
                </div>
              </NavLink>
              <NavLink to="/" title="ccc">
                <div className="navBarButtons ccc" >
                  CCC
                </div>
              </NavLink> */}



            </div>


            <div className="navflex2">
              <NavLink to="/" title="home">
                <div className="navBarButtons">
                  Home
                </div>
              </NavLink>
              <NavLink to="/hall-of-fame" title="Hall of fame">
                <div className="navBarButtons">
                  Hall of Fame
                </div>
              </NavLink>
              <NavLink to="/events" title="events">
                <div className="navBarButtons">
                  Events
                </div>
              </NavLink>
              {/* <NavLink to="/about" title="team">
                <div className="navBarButtons" >
                  Team
                </div>
              </NavLink> */}
              <NavLink to="/potd" title="potd">
                <div className="navBarButtons">
                  POTD
                </div>
              </NavLink>
              {/* <img className="potd-icon" src="/images/potd.png" alt="potd" /> */}

              {
                auth?.user?.role == 1 ? <>
                  <NavLink to="/admin/dashboard" title="login">
                    <div className="navBarButtons login" title="login">
                      Dashboard
                    </div>
                  </NavLink>
                </> : <></>
              }
              {
                !auth.user ? (
                  <NavLink to="/protected/login" title="login">
                    <div className="navBarButtons login" title="login">
                      Login
                    </div>
                  </NavLink>
                ) : (
                  <NavLink to="/" onClick={handleLogOut} title="sign up">
                    <div className="navBarButtons login" >
                      Logout
                    </div>
                  </NavLink>

                )
              }

              {/* {isAuthenticated && (
                <div>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              )} */}




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
            {/* <img src="\images\logo.png" className="footerLogo1" alt="cccLogo" /> */}
            <a
              href="https://instagram.com/ccc_sjcem?igshid=YmMyMTA2M2Y="
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footerLogo" />
            </a>
            <a
              href="https://discord.gg/9H2QQvqSpp"
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
          <p>Developed By Web Development team... CCC!!</p>
        </div>
      </footer>

    </div>
  );
};

export default Layout;


