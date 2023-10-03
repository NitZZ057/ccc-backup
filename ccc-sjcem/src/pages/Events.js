import React, { useEffect, useState } from "react";
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

import "../css/event.scss";

const EventPage = () => {

  const [eveImg, setEveImg] = useState([])
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
      <div className="event_container">
        <div className="event-img">
          {
            eveImg.map((img, index) => (
              <div key={index} className='card'>
                {/* <h2 className="eventName">{img.eventName}</h2>
                <img key={index} className='event-img' src={img.image} width={'300px'} />
                <p className="discription">{img.discription}</p> */}
                <img src={img.image} alt="" />
                <div class="description">
                  <h1>{img.eventName}</h1>
                  <p>{img.discription}</p>
                </div>
              </div>
            ))
          }
          {console.log(eveImg)}
        </div>
      </div>
    </Layout>
  );
};

export default EventPage;