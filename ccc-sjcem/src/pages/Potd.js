import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Editor from '../components/POTD/Editor'
import { useAuth } from '../context/auth'
import axios from 'axios';


const Potd = () => {
  const [auth, setAuth] = useAuth();
  const [allImg, setAllimg] = useState(null);
  const [score, setScore] = React.useState(0);
  const [questions,setQuestions] = useState([]);

  //get score
  const getScore = async () => {
    try {
      const id = auth.user._id;
      const res = await axios.get(`/api/v1/auth/score/${id}`)
      if (res && res.data.success) {
        setScore(res.data.score)
      }
    } catch (error) {
        console.log(error)
    }
  }

  React.useEffect(() => { 
    const delay = 3000; 
    const timeoutId = setTimeout(() => {
      if(auth.user){
        getScore();
      }
    }, delay);

    return () => {
      
      clearTimeout(timeoutId);
    };
  }, [Editor])

  
  useEffect(()=>{
    getImages();
  },[])

  const getImages = async()=>{
    const questions = await axios.get('/api/v1/question/get-img')
    // setAllimg(resImg.data.data)
    // console.log(questions.data.questions)  
    setQuestions(questions.data.questions)
  }
  
  return (
    <Layout>
      <div className="potd-container">
        <div className="score-div">Your score {score}</div>
        <div className="potd-title">Problem of the Day</div>
        <div className="potd-question">
          <div className="potd-question-title">
             {/* {
             allImg==null?''
            :allImg.map((data,index)=>{
              return <h2 key={index}>{data.question}</h2>
            })
              } */}
              <h2>{questions[0]?.question}</h2>
              </div>

          <div className="potd-question-text">
             
              
             <img src={questions.length>0 ?questions[0].image:''} alt='img' width={'100%'} />
          </div>

        </div>

        <div className="potd-input">
          <Editor className='editor' />

        </div>
      </div>

    </Layout>
  )
}

export default Potd