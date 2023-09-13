import React,{useEffect, useState} from 'react'
import '../../css/potd.css'
import axios from 'axios'

const LeaderBoard = () => {
    const [winners,setWinners] = useState([])
    const [loading,setLoading] = useState(true)
    // const winners = [
    //     {
    //         name:"John Doe",
    //         score:"70"
    //     },
    //     {
    //         name:"Alice Doe",
    //         score:"60"
    //     },
    //     {
    //         name:"Alexandra Daddario",
    //         score:"55"
    //     }
    // ]

   const getWinners = async () =>{
    try {
        const res = await axios.get('/api/v1/potd/get-winners')
        if(res.data.success){
            setWinners(res.data.winners)
            setLoading(false)
        }
    } catch (error) {
        setLoading(false)
        console.log(error)
    }
   }

   useEffect(()=>{
    getWinners()
   },[])
  return (
    <div className='leaderboard-container'>
         <div className="winner-title">Live Leaderboard</div>
         <div className="winner"><span className="winner-name tb">Name</span><span className="score tb">Score</span></div>
        {
           loading?
           <h1>Loading...</h1>
           : 
           winners.map((winner,index)=>(
                <div key={index} className="winner ln"><span className="winner-name">{index+1} {winner.name}</span><span className="score">{winner.score}</span></div>
            ))
        }
        
    </div>
  )
}

export default LeaderBoard