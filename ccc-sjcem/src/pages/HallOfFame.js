import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import "../css/halloffame.css";

const HallOfFame = () => {
  const [details, setDetails] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImg();
    getDetails();
  }, []);

  const getImg = async () => {
    try {
      const res = await axios.get("/api/v1/hof/getLeadImg");
      setImages(res.data.images);
      console.log(res.data.images);
    } catch (error) {
      console.log(error);
    }
  };
  const getDetails = async () => {
    try {
      const res = await axios.get("/api/v1/hof/getHOFDetails");
      setDetails(res.data.images);
      console.log(res.data.images);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="hall-of-fame">
        <div className="hall-of-fame-div">
          <div className="hall-of-fame-content">
            <div className="show-images">
              <div className="head">
              <h1 className="htag">September Heroes</h1>
              </div>
              <div className="winner">
                {
              details.map((img, index) => (
                <div key={index} className={"st"+index}>
                <div key={index} className={"circle"+index}> <h1>{index+1}</h1> </div>
                 <div key={index} className={'detail'+index}>
                  <h1 key={index}>{img.fname} <br /> {img.lname}</h1>
                  <h2 key={index}>{img.branch}</h2>
                  <h2 key={index}>{img.score}</h2>
                  <h2 key={index}>{img.year}</h2>
                  <h2 key={index}>{img.month}</h2>
                 </div>

                </div>
              ))}
                </div>
              <h1 className="htagg">Top 10 </h1>
              {images.map((img, index) => (
                <div key={index} className="imgDiv">
                  <img
                    key={index}
                    className="leaderboard-img"
                    src={img.image}
                    width={"100%"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HallOfFame;
