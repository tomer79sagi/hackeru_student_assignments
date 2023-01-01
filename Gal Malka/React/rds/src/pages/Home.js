import React from 'react'
import '../styles/Home.css'
import Card from '../componenets/card'
function Home() {
  return (
    <div className='body'>
      <div className='overview'>
          <div className='header'>
            <h2>Overview</h2> 
          </div>
          <div className='content'>
            <div className='statistics'>
              <div className='card-container'>
                <Card text="Wins" value="0" />
                <Card text="Total Games" value="0" />
                <Card text="Loses" value="0" />
              </div>
              
            </div>
          </div>
          <div className='fotter'>
            
          </div>
      </div>
    </div>
    
  )
}

export default Home