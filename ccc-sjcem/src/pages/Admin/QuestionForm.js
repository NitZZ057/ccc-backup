import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import axios from "axios";
import '../../css/question.css'

const QuestionForm = () => {
  const [image, setImage] = useState(null);
  const [question, setQuestion] = useState('')
  const [testcase, setTestcase] = useState('')
  const [output, setOutout] = useState('')
  const loader = document.getElementsByClassName('loader-container')[0]


  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const imgSubmit = async (e) => {
    try {
      e.preventDefault();
      setQuestion(e.target[0].value);
      setTestcase(e.target[2].value)
      const imgData = new FormData();
      imgData.append("image", image);
      imgData.append('question', question);
      imgData.append('testcase', testcase);
      imgData.append('output', output);
      loader.style.display = 'flex'
      const imgRes = await axios.post(
        "/api/v1/question/upload-img",
        imgData
      );
      loader.style.display = 'none'

      if (imgRes.data.success) {
        alert('image uploaded')
        navigate('/potd')
      }
    } catch (error) {
      console.log(error);
    }



  };


  return (
    <Layout>

      <div className="photoInput">
        <div class="loader-container wait">
          <div class="loading-text">Please wait uploading...</div>
          <div class="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="form-container">
          <form className="que-form" onSubmit={imgSubmit}>
            <h2 className="que-heading">Add Question</h2>
            <label htmlFor="question-headline">
              Add quesion headline
              <input value={question} onChange={(e) => setQuestion(e.target.value)} type="text" name="question-headline" />
            </label>
            <label htmlFor="question-image">
              Add quesion image
              <input
                type="file"
                accept="image/*"
                required
                name="question-image"
                placeholder="question"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="testcase">
              Testcase
              <input value={testcase} onChange={(e) => setTestcase(e.target.value)} type="text" name="testcase" />
            </label>

            <label htmlFor="output">
              Output
              <input value={output} onChange={(e) => setOutout(e.target.value)} type="text" name="testcase" />
            </label>

            <button type="submit" className="que-btn">
              submit
            </button>
          </form>
        </div>
      </div>

    </Layout>
  );
};

export default QuestionForm;
