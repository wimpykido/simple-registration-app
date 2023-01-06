import React from 'react'
import "../styles/Right.css"
import man from "../assets/Ellipse 1.svg"
const Right = () => {
  return (
      <div className='right-div'>
        <div className='first'>
            <p><strong>Golden human statue</strong></p>
            <div className='person-div'>
                <img src={man} alt="img" />
                <p>George schmidt</p>
            </div>
        </div>
        <div className='second'>
            <p className='yellow'><strong>4.10 ETH</strong></p>
            <p>$8.625,61</p>
        </div>
    </div>
    
  )
}

export default Right
