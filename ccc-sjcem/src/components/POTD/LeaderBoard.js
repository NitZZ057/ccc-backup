import React from 'react'
import '../../css/potd.css'

const LeaderBoard = () => {
    const winners = [
        {
            name:"John Doe",
            score:"70"
        },
        {
            name:"Alice Doe",
            score:"60"
        },
        {
            name:"Alexandra Daddario",
            score:"55"
        }
    ]
  return (
    <div className='leaderboard-container'>
         <div className="winner-title">Weekly Leaders</div>
         <div className="winner"><span className="winner-name tb">Name</span><span className="score tb">Score</span></div>
        {
            winners.map((winner,index)=>(
                <div key={index} className="winner ln"><span className="winner-name">{index+1} {winner.name}</span><span className="score">{winner.score}</span></div>
            ))
        }
        
    </div>
  )
}

export default LeaderBoard