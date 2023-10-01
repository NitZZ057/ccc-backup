import React, { useEffect,useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/eventp.css";

//Components
import Layout from "../components/Layout";
// import NewsLetter from "../components/NewsLetter/NewsLetter";

// import Group661 from "../assests/hackathonAndIdeathon/Group661.png";
// import icon1 from "../assests/hackathonAndIdeathon/icon1.svg";
// import icon2 from "../assests/hackathonAndIdeathon/icon2.svg";
// import icon3 from "../assests/hackathonAndIdeathon/icon3.svg";

// import illustation from "../assests/hackathonAndIdeathon/Illustration.svg";
// import image1 from "../assests/hackathonAndIdeathon/image1.svg";
// import image2 from "../assests/hackathonAndIdeathon/image2.svg";
// import image3 from "../assests/hackathonAndIdeathon/image3.svg";
// import image4 from "../assests/hackathonAndIdeathon/image4.svg";

// import "../css/event.scss";

const EventPage = () => {
  const [eveImg,setEveImg]=useState([])
  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);
  useEffect(() => {
    getImg()
  }, [])

  const getImg = async () => {
    try {
      const res = await axios.get('/api/v1/pastEvent/getPastEventImg')
      console.log(res.data.images);
      setEveImg(res.data.images)
      // setLen(res.data.images.length)
    } catch (error) {
      console.log(error);
    }

  }
  
  return (
    <Layout>
      <div class="gallery">
        <div class="card">
          <img src="https://img.freepik.com/free-photo/view-brightly-colored-frog-nature_23-2150453188.jpg?t=st=1691128330~exp=1691131930~hmac=10a3a28429a4d384749a210b3aa1bed6fdc8c970715364865872d73a30b9878b&w=740" alt=""/>
            <div class="description">
              <h1>Rana</h1>
              <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic corporis animi harum? Nisi quis ipsum laborum a animi perspiciatis assumenda quae deserunt porro, soluta voluptatum molestiae. Eveniet, aliquam! Mollitia? </p>
            </div>
        </div>
        <div class="card">
          <img src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?w=740&t=st=1691128835~exp=1691129435~hmac=cf4add8cc138b51f673199bef484a8b6e73e2a38bb2c66f19b0520fbd4231875" alt=""/>
            <div class="description">
              <h1>Guacamaya</h1>
              <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic corporis animi harum? Nisi quis ipsum laborum a animi perspiciatis assumenda quae deserunt porro, soluta voluptatum molestiae. Eveniet, aliquam! Mollitia? </p>
            </div>
        </div>

        <div class="card">
          <img src="https://img.freepik.com/free-photo/cute-chameleon-plant_23-2148949385.jpg?w=740&t=st=1691128794~exp=1691129394~hmac=0cfb7bc50fd1ff0983e2525c90cd2a3fbffd916aa374ae063d95232dcd2c4b35" alt=""/>
            <div class="description">
              <h1>Camaleon</h1>
              <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic corporis animi harum? Nisi quis ipsum laborum a animi perspiciatis assumenda quae deserunt porro, soluta voluptatum molestiae. Eveniet, aliquam! Mollitia? </p>
            </div>
        </div>
      </div>
      {/* <div className="event_container">
        <div class="event_hero">
          <img src={Group661} alt="HackathonAndIdeathon" />
          <div className="hero_title">
            <h1 className="text">
              Events To <br />
              <span className="text-violet">Network</span>,{" "}
              <span className="text-green">Create</span>, & <br />
              <span className="text-red">Grow</span> Together
            </h1>
            <div className="hero_form">
              <form>
                <input
                  className="hero_email"
                  type="email"
                  placeholder="Subscribe for our future update..."
                />
                <button className="hero_button">Subscribe</button>
              </form>
              <div className="mt-2 px-2">
                <a href="/">or request for conducting events...</a>
              </div>
            </div>
          </div>
        </div>

        <div className="event_mid1">
          <div>
            <img className="event_icon ion1" src={icon1} alt="icon1" />
            <div>
              <h2 id="has">100%</h2>
              <p>Care Assurance</p>
            </div>
          </div>
          <div>
            <img className="event_icon ion2" src={icon2} alt="icon2" />
            <div>
              <h2>500+</h2>
              <p>Network of Developers</p>
            </div>
          </div>
          <div>
            <img className="event_icon ion3" src={icon3} alt="icon3" />
            <div>
              <h2>0</h2>
              <p>Negative Feedback</p>
            </div>
          </div>
        </div>

        <div className="event_mid2" data-aos="fade-up">
          <div className="mid_illustration">
            <img src={illustation} alt="ccc" />
          </div>
          <div className="mid2_card">
            <h1>Event Full Of</h1>
            <ul>
              <li>Hands on dev seminar</li>
              <li>Fun team activities</li>
              <li>Talks and discussions</li>
              <li>Ice breakers and networking</li>
              <li>Food and beverages</li>
            </ul>
          </div>
        </div>

        <div className="event_mid3">
          <h1 class="text" data-aos="fade-up">
            Who should attend our events?
          </h1>
          <div className="event_bottom">
            <div className="card_group">
              <div className="card_item1" data-aos="fade-up">
                <div className="card_image">
                  <img src={image1} alt="image1" />
                </div>
                <div class="card_text">
                  <h1>Students</h1>
                  <p>
                    You're more than welcome to learn, network, and get a
                    glimpse of how the pros do it
                  </p>
                </div>
              </div>
              <div className="card_item1" data-aos="fade-up">
                <div className="card_image">
                  <img src={image2} alt="image1" />
                </div>
                <div class="card_text">
                  <h1>Professionals</h1>
                  <p>
                    You're more than welcome to learn, network, and get a
                    glimpse of how the pros do it
                  </p>
                </div>
              </div>
              <div className="card_item1" data-aos="fade-up">
                <div className="card_image">
                  <img src={image3} alt="image1" />
                </div>
                <div class="card_text">
                  <h1>Enthusiasts</h1>
                  <p>
                    Even if you don't have a career in design, doesn't mean you
                    can't love it
                  </p>
                </div>
              </div>
            </div>
            <div class="final">
              <div className="first" data-aos="fade-up">
                <h1>
                  Become a speaker and
                  <br /> host a session
                </h1>
                <p>
                  If you're passionate about design and would like to
                  <br /> share the knowledge, we'll love to have you on board
                </p>
                <button className="btn_apply">Apply</button>
              </div>
              <div className="second" data-aos="fade-up">
                <img src={image4} alt="ccc_image4" />
              </div>
            </div>
          </div>
        </div>

        <div className="newsLetter">
          <NewsLetter />
        </div>
      </div> */}
    </Layout>
  );
};

export default EventPage;
