import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import '../../css/eventForm.css'

const EventForm = () => {
  const [eventName, setEventName] = useState('')
  const [discription, setDiscription] = useState('')
  const [image, setImage] = useState("")
  const [images, setImages] = useState([])
  const loader = document.getElementsByClassName('loader-container')[0]

  const eventSubmit = async (e) => {
    e.preventDefault();
    try {
      const imgData = new FormData();
      imgData.append("image", image);
      imgData.append('eventName', eventName);
      imgData.append('discription', discription);
      loader.style.display='flex';
      const imgRes = await axios.post(
        "/api/v1/pastEvent/pastEventImg",
        imgData
      );
      loader.style.display='none';
      if (imgRes.data.success) {
        alert('image uploaded')
        // navigate('/')
      }
    } catch (error) {
      console.log(error);
    }



  };


  useEffect(() => {
    getImg()
  }, [])

  const getImg = async () => {
    try {
      const res = await axios.get('/api/v1/pastEvent/getPastEventImg')
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
        <form className="event-form" onSubmit={eventSubmit}>
            <h2 className="event-heading">Add Question</h2>
            <label htmlFor="event-image">
              Add quesion image
              <input
                type="file"
                accept="image/*"
                required
                name="event-image"
                placeholder="event"
                onChange=
                {(e) => setImage(e.target.files[0])}
              />
            </label>
            <label htmlFor="event-name">
              Event Name
              <input value={eventName} onChange={(e) => setEventName(e.target.value)}type="text" name="event-name" />
            </label>

            <label htmlFor="discription">
             Discription
              <input value={discription} onChange={(e) => setDiscription(e.target.value)} type="text" name="discription" />
            </label>

            <button type="submit" className="event-btn">
              submit
            </button>
          </form>

        <div className="event-img-head">Current Images</div>

        <div className="show-images">
          
          {
            images.map((img,index) => (
              <div key={index} className='eve-img-div'>
                <h2 className="eventName">{img.eventName}</h2>
                <img key={index} className='event-img' src={img.image} width={'300px'} />
                <p className="discription">{img.discription}</p>
                <button onClick={(e)=>{
                  axios.delete(`/api/v1/pastEvent/deletePastEventImg/${img._id}`)
                  .then((res)=>{
                    alert('image deleted')
                    getImg()
                  })
                  .catch((err)=>{
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