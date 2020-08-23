import React from 'react';
import './CardList.style.css';
import { Card } from '../card/Card';
export const CardList = (props) => (
    <div className='card-list'>
      {
          props.monsters.map(monster => <Card monster= {monster} />)
      }
    </div>
)