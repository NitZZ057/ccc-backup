import React from 'react'
import Layout from '../components/Layout'
import Editor from '../components/POTD/Editor'


const Potd = () => {
  

  return (
    <Layout>
      <div className="potd-container">
        <div className="potd-title">Problem of the Day</div>
        <div className="potd-question">
          <div className="potd-question-title"> Search in Rotated Sorted Array</div>
          <div className="potd-question-text">
            <img src='/images/potd.jpg' alt='img' />
          </div>
        </div>

        <div className="potd-input">
          <Editor />
        </div>
      
      </div>

    </Layout>
  )
}

export default Potd