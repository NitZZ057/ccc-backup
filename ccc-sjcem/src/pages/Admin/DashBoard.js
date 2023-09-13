import React from 'react'
import { NavLink , useNavigate} from "react-router-dom";
import Layout from "../../components/Layout";
import '../../css/DashBoard.css'
import axios from 'axios';

const DashBoard = () => {
  const navigate = useNavigate()

  const resetScore = async () => {
    try {
      if (window.confirm("Are you sure you want to reset the score?")) {
        const res = await axios.put('/api/v1/event/resetScore')
        if (res.data.success) {
          alert("Score reset successful")
          navigate('/')
        }
        else {
          alert(res.data.message)
          // console.log(res)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
      <div className="dashboard-container">
        <div className="dashboard-div">
        <div className="add-potd-div">
          <NavLink to="/admin/add-que" title="add question">
            <div className="navBarButtons add-potd" >
              Add question
            </div>
          </NavLink>
        </div>
        <div className="add-event-div">
          <NavLink to="/admin/add-event" title="add event">
            <div className="navBarButtons add-event" >
              Add event
            </div>
          </NavLink>
        </div>
        <div className="add-event-div">
          <NavLink onClick={resetScore}  title="reset score">
            <div className="navBarButtons add-event" >
              Reset score
            </div>
          </NavLink>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default DashBoard