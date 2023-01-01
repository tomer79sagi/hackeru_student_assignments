import React, { useState } from 'react'
import '../styles/SinglePlayer.css'
import Card from '../componenets/card'
import * as AiIcons from "react-icons/ai"

function SinglePlayer() {
  const [healthPoint,setHealthPoint] = useState(3)
  const [aiMove,setAiMove] = useState()
  const [playerMove,setPlayerMove] = useState()
  const [countDown, setCountDown] = useState(5)

  function dmg(){
    setHealthPoint(healthPoint-1)
  }

  return (
    <div className='body'>
        
        <h1>SinglePlayer</h1>        
        <div className='player-container'>
          <h2>AI Move</h2>
          <div className='img-container'>

          </div>
        
        </div>
        <div className='count-down'>
          {countDown}
        </div>
        <div className='player-container'>
          <h2>Player Move</h2>
          <div className='img-container'>

          </div>
          <div className='card-container'>
            <div>
              <Card onClick={()=> console.log("shield")} icon="shield" />
            </div>
            <div>
              <Card icon="gun" />
            </div>
            <div>
              <Card icon="reload" />
            </div>
            

          </div>
        </div>
        <div className='health-point'>
            {healthPoint > 0 ? <AiIcons.AiOutlineHeart className='icon'/> :null}
            {healthPoint > 1 ? <AiIcons.AiOutlineHeart className='icon'/> :null}
            {healthPoint > 2 ? <AiIcons.AiOutlineHeart className='icon'/> :null}
        </div>
        
    </div>
  )
}

export default SinglePlayer