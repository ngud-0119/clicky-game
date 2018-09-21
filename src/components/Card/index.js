import React from 'react';
import './Card.css';

const Card = props => (
        <div onClick= {() => props.handleClick(props.id)}
        className='card' key={props.id}>
            {props.letter}
        </div>
    );

export default Card;