import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import '../css/halloffame.css'

const HallOfFame = () => {
    const [details,setDetails] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        getImg()
        getDetails()
      }, [])

    const getImg = async () => {
        try {
          const res = await axios.get('/api/v1/hof/getLeadImg')
          setImages(res.data.images)
          console.log(res.data.images);
    
        } catch (error) {
          console.log(error);
        }
    
      }
      const getDetails = async () => {
        try {
          const res = await axios.get('/api/v1/hof/getHOFDetails')
          setDetails(res.data.images)
          console.log(res.data.images);
        } catch (error) {
          console.log(error);
        }
    
      }



    return (
        <Layout>
            <div className="hall-of-fame">
                <div className="hall-of-fame-div">
                    <div className="hall-of-fame-content">
                    <div className="show-images">
          {
          details.map((img, index) => (
            <div key={index} className="details">
              <h5 key={index}>rank:{img.rank}</h5>
              <h5 key={index}>name:{img.name}</h5>
              <h5 key={index}>score:{img.score}</h5>
              <h5 key={index}>year:{img.year}</h5>
              <h5 key={index}>month:{img.month}</h5>
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
            </div>
          ))}
        </div>
                      
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default HallOfFame