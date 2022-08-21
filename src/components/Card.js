import React from 'react'
import './Card.css'

const Card=({name,id,email})=>{
    return(
            <>
            {/* <h1>Robo</h1> */}
    < div className=' tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200*200`} alt='404'></img>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
</>
    );
}
export default Card;