import React from 'react'
import "./ourteam.css"

const Card = ({details}) => {
  return (
        <div className="card">    
            <img src={details.image} alt="my image" />
                <div className="card-content">
                    <h2 style={{fontWeight:"900"}}>{`${details.firstname} ${details.lastname}`}</h2>
                    <h4 style={{textDecoration:"italic", fontStyle:"italic", fontWeight:"bold"}}>{details.email}</h4>
                    <h4 style={{fontWeight:"lighter"}}>{details.phone}</h4>
                    <h4 style={{fontWeight:"lighter"}}>{details.gender}</h4>
                </div>
        </div>
  )
}

export default Card