import React from 'react';
import './Card.style.css';
export const Card = ({ monster }) =>(
    <div className='card-container'>
       <img src= {`https://robohash.org/${monster.id}?set=set2&180x180`} />
       <h2> { monster.name } </h2>
       <p> { monster.email } </p>
    </div>
)

