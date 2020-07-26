import React from 'react';
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div className='g-card-info' style={style} >
            <p className='g-card-title'>{props.title}</p>
            <p className='g-card-sub-title'>{props.subTitle}</p>
            <p className='g-card-about'>{props.about}</p>
            <div title="View Github Repository of Project"><a href={props.link} target='_blank' rel='noopener noreferrer'>View</a></div>
        </animated.div>
    )
}

export default CardInfo;