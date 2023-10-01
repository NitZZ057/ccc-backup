import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import '../../css/eventForm.css'

const EventForm = () => {
  const [image, setImage] = useState("")
  const [name, setName] = useState("photo")
  const [images, setImages] = useState([])
  const loader = document.getElementsByClassName('loader-container')[0]


  const changeHandle = (e) => {
    e.preventDefault();
    // console.log(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const eventSubmit = async (e) => {
    e.preventDefault();
    try {
      const imgData = new FormData();
      imgData.append("name", name);
      imgData.append("image", image);
      loader.style.display = 'flex'
      const imgRes = await axios.post(`/api/v1/event/eventimg`, imgData);
      loader.style.display = 'none'

      if (imgRes.data.success) {
        alert('image uploaded please refresh the page')
      }

    } catch (error) {
      console.log(error)
    }



  };


  useEffect(() => {
    getImg()
  }, [])

  const getImg = async () => {
    try {
      const res = await axios.get('/api/v1/event/getEventImg')
      setImages(res.data.images)
    } catch (error) {
      console.log(error);
    }

  }



  return (
    <Layout>
      <div className='event-input'>
        <div class="loader-container wait">
          <div class="loading-text">Please wait uploading...</div>
          <div class="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <form className='event-form' onSubmit={eventSubmit}>
          <h2 className="event-heading">Add event</h2>
          <label htmlFor='event-image'>
            event image
            <input
              type="file"
              accept="image/*"
              required
              name="event-image"
              placeholder="question"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          {
            image && (
              <img src={URL.createObjectURL(image)} height={"200px"} alt="" />
            )
          }

          <button type='submit' className='que-btn'>
            submit
          </button>
        </form>

        <div className="event-img-head">Current Images</div>

        <div className="show-images">

          {
            images.map((img, index) => (
              <div key={index} className='eve-img-div'>
                <img key={index} className='event-img' src={img.image} width={'300px'} />
                <button onClick={(e) => {
                  axios.delete(`/api/v1/event/deleteEventImg/${img._id}`)
                    .then((res) => {
                      alert('image deleted')
                      getImg()
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                }} className='delete-btn'>delete</button>
              </div>

            ))
          }
        </div>

      </div>


    </Layout>
  )
}

export default EventForm