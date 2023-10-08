import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import "../../css/eventForm.css";

const AddHOF = () => {
  const [fnamee, setFname] = useState("");
  const [lnamee, setLname] = useState("");
  const [branch, setBranch] = useState("");
  const [scoree, setScore] = useState("");
  const [yearr, setYear] = useState("");
  const [monthh, setmonth] = useState("");
  const [details, setDetails] = useState([]);
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const loader = document.getElementsByClassName('loader-container')[0]


  const eventSubmit = async (e) => {
    e.preventDefault();
    try {
      const imgData = new FormData();
      imgData.append("fname", fnamee);
      imgData.append("lname", lnamee);
      imgData.append("branch", branch);
      imgData.append("score", scoree);
      imgData.append("year", yearr);
      imgData.append("month", monthh);
      loader.style.display='flex'
      const imgRes = await axios.post("/api/v1/hof/uploadHOFDetails", imgData);
      loader.style.display='none'
      if (imgRes.data.success) {
        alert("data uploaded");
        // navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  };
  const imgSubmit = async (e) => {
    e.preventDefault();
    try {
      const imgData = new FormData();
      imgData.append("image", image);
      loader.style.display='flex'
      const imgRes = await axios.post("/api/v1/hof/uploadLeadImg", imgData);
      loader.style.display='none'

      if (imgRes.data.success) {
        alert("data uploaded");
        // navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="event-input">
        <div className="loader-container wait">
          <div className="loading-text">Please wait uploading...</div>
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <form className="event-form" onSubmit={eventSubmit}>
          <h2 className="event-heading">Add HOF</h2>
          {/* input   
            Rupesh Jadhav T.E. Comps
            2023-2024
            Score: 120
            Month September
            */}
          <label htmlFor="winner-fname">
            First Name
            <input
              value={fnamee}
              onChange={(e) => setFname(e.target.value)}
              type="text"
              name="winner-fname"
            />
          </label>
          <label htmlFor="winner-lname">
            Last Name
            <input
              value={lnamee}
              onChange={(e) => setLname(e.target.value)}
              type="text"
              name="winner-lname"
            />
          </label>
          <label htmlFor="winner-branch">
            Branch & Year
            <input
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              type="text"
              name="winner-branch"
            />
          </label>
          <label htmlFor="winner-score">
            Score : (Ex. 120)
            <input
              value={scoree}
              onChange={(e) => setScore(e.target.value)}
              type="text"
              name="winner-score"
            />
          </label>
          <label htmlFor="winner-year">
            Year : (Ex. 2023-2024)
            <input
              value={yearr}
              onChange={(e) => setYear(e.target.value)}
              type="text"
              name="winner-year"
            />
          </label>
          <label htmlFor="winner-month">
            Month : (Ex. September)
            <input
              value={monthh}
              onChange={(e) => setmonth(e.target.value)}
              type="text"
              name="winner-month"
            />
          </label>

          <button type="submit" className="event-btn">
            submit
          </button>
        </form>

        <form className="event-form" onSubmit={imgSubmit}>
          <label htmlFor="event-image">
            Add Leaderboard Image
            <input
              type="file"
              accept="image/*"
              required
              name="event-image"
              placeholder="event"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <button type="submit" className="event-btn">
            submit
          </button>
        </form>

        <div className="event-img-head">Current Images</div>

        <div className="show-images">
          {details.map((img, index) => (
            <div key={index} className="details">
              <h1>{img.fname} <br /> {img.lname} </h1>
              <h2>{img.branch}</h2>
              <h2>{img.score}</h2>
              <h2>{img.year}</h2>
              <h2>{img.month}</h2>
              <button
                onClick={(e) => {
                  axios
                    .delete(`/api/v1/hof/deleteHOFDetails/${img._id}`)
                    .then((res) => {
                      alert("details deleted");
                      getDetails();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                className="delete-btn"
              >
                delete
              </button>
            </div>
          ))}

          {images.map((img, index) => (
            <div key={index} className="eve-img-div">
              <img
                key={index}
                className="event-img"
                src={img.image}
                width={"300px"}
              />
              <button
                onClick={(e) => {
                  axios
                    .delete(`/api/v1/hof/deleteHOFImg/${img._id}`)
                    .then((res) => {
                      alert("image deleted");
                      getImg();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                className="delete-btn"
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AddHOF;
