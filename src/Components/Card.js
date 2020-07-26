import React from 'react';
import CardInfo from './CardInfo'

function Card(props) {
    return (
        <div className='d-inline-block g-card'>
            <img className='g-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
            {/* {props.item.selected && } */}
        </div>
    )
}

export default Card;