import React, { Component } from 'react';
import clickCards from '../../clickCards.json';
import Card from '../Card';

class GameContainer extends Component {

    state = {
        cards: clickCards,
        score: 0
    }

    handleClick = id => {
        const newCards = this.state.cards.map(card => {
            if (card.id === id){
                card.clicked = true;
            }
            return card;
        });

        this.setState({
            cards: this.shuffleCards(newCards),
            score: this.state.score + 1
        });

        console.log(newCards);
    }

    shuffleCards = cards => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    render() {
        return (
            <div>
                <p>Score: {this.state.score}</p>
                {this.state.cards.map(card => {
                    return (
                        <Card 
                            key={card.id}
                            id={card.id}
                            image={card.image}
                            clicked={card.clicked}
                            handleClick={this.handleClick}
                         />
                    )
                }
                )}
            </div>
        )

    };
};

export default GameContainer;