//Components
import React, { useState,useRef } from "react";
import Layout from "../components/Layout";
import LeaderBoard from "../components/POTD/LeaderBoard";

//Image Import
// import image3 from "../assests/image3.png";
// import image2 from "../assests/image2.png";
import image3 from "../assests/cccteam1.jpg";

const HomePage = () => {
  const images = [
    '/images/ccc-poster.jpg',
    '/images/registerform1.jpg',
    '/images/ccc1.jpg',
  ];

  const [index, setIndex] = useState(0);
  const carouselImg = useRef(null)


  const handlePrev = () => {
    setIndex((index+1)%images.length)
    };
  


  React.useEffect(() => {
    const interval = setInterval(handlePrev, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [index]);



  return (
    <div>
      <Layout>
        <div className="top-container">
          {/* <div className="headerContainer">
            <img
              src={ccc}
              className="headerContainerImage"
              data-aos="fade-up"
              alt="CCCLogoText"
            />
          </div> */}
          <div className="home-carousel">
            <img ref={carouselImg} className="carousel-img" src={images[index]} alt="img"/>
          </div>
        </div>
        <section>
          <div className="leader-board">
            <LeaderBoard/>
          </div>
        </section>
        <section className="test">
          <div className="test-container">
            <h1 className="title">
            Our motivation
            </h1>
            <p>
            As a competitive programmer you will acquire the ability to think
              critically, attain good debugging skills, learn a vast knowledge
              of algorithms and ipso facto the skills to crack algorithmic
              interviews which are all essential to computer science students.
              This club was founded with the resolve to organise the St.John
              College Of Engineering And Management competitive programming
              endeavours in order to achieve results that an institution of this
              calibre deserves.

            </p>
          </div>
          <div className="img-container">
          <img
                src={image3}
                id="firstImage"
                alt="firstImage"
                className="home-group"
              />
          </div>
        </section>
        {/* <section>
          <div className="blog">
            <div className="flavour">
              <h2>Our motivation</h2>
              "As a competitive programmer you will acquire the ability to think
              critically, attain good debugging skills, learn a vast knowledge
              of algorithms and ipso facto the skills to crack algorithmic
              interviews which are all essential to computer science students.
              This club was founded with the resolve to organise the St.John
              College Of Engineering And Management competitive programming
              endeavours in order to achieve results that an institution of this
              calibre deserves."
            </div>
            <div className="activity">
              <img
                src={image3}
                id="firstImage"
                alt="firstImage"
                className="home-group-image1"
              />

              <div className="activityText">
                <h2>What do we do?</h2>
                <h3>Regular workshops</h3>
                This is where we learn new stuff.
                <h3>Practice competitions</h3>
                This is where we apply what we learnt.
                <h3>Social gatherings</h3>
                This is where we cry about stuff we didn't get and treat
                ourselves with free food because we deserve it.
                <h3>Mock interviews</h3>
                This is where we get experienced people to help us prepare for
                tech interviews.
                <h3>Talks</h3>
                And this is where we listen to guest lecturers or people from
                the industry talk about cool stuff.
              </div>
            </div>
            <div className="guide">
              <img
                src={image2}
                id="secondImage"
                alt="secondImage"
                className="home-group-image2"
              />
              <div className="guideText">
                <h2>How to get started?</h2>
                <h3>
                  First, sign up <a href="/">here</a>
                </h3>
                This registers you as a member of the club and automatically
                adds you to the club's mailing list.
                <h3>
                  Next, join our{" "}
                  <a href="/" title="facebook">
                    Facebook Group
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://discord.gg/4ztsgkFz"
                    title="discord"
                    // target="_blank"
                  >
                    {" "}
                    Discord Server
                  </a>
                </h3>
                These are the platforms where we hang out. They are the best
                place to interact with other club members, keep track of coming
                events and etcetera.
                <br />
                <h3>And last but not the least, remember to have fun!</h3>
                <br />
                <h2>Contact Us</h2>
                As certified computer geeks we take pride in our social skills
                and would love to hear from you.
                <br />
                <br />
                For all official enquiries please email us at
                <a href="mailto:saurabht@sjcem.edu.in">
                  <span className="__cf_email__"> contact_ccc@sjcem.edu.in</span>
                </a>
                <br />
                If you just want to get in touch, you can do so via our Facebook
                Group or our Discord Server.
              </div>
            </div>
          </div>
        </section> */}
        
      </Layout>
    </div>
  );
};

export default HomePage;
