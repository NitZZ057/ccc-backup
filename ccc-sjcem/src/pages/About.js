import { TypeAnimation } from "react-type-animation";

//components
import CoreTeam from "../components/TeamInfo/CoreTeam";
import OurTeam from "../components/TeamInfo/OurTeam";
import Layout from "../components/Layout";

//css asdjasidjaskdjd
import "../css/about.css";

import teachVideo from "../assests/aboutvideo.mp4";

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="team">
            <video
              autoPlay
              loop
              muted
              plays-inline="true"
              className="back-video"
            >
              <source src={teachVideo} />
            </video>
            {/* Core Team */}
            <div className="d-flex justify-content-center flex-wrap">
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                  "Welcome to the community of Coders",
                  2000,
                  "Welcome to the community of Learners",
                  2000,
                  "Welcome to the community of Educators",
                  2000,
                  "Welcome to the community of Developers",
                  2000,
                ]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                className="hero-text"
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </div>
            <div>
              <p className="about-text">
                "We are a student run body made by the students for the students
                to help them to learn and build their knowledge on competitive
                coding."
              </p>
            </div>
            <div className="team-wrapper">
              <CoreTeam />
            </div>
            <div className="team-wrapper">
              <OurTeam/>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AboutPage;
