import React from 'react';
import './Card.css';

const Card = props => (
        <div onClick= {() => props.handleClick(props.id)}
        className='card' key={props.id}>
            <img src={props.image} />
        </div>
    );

export default Card;