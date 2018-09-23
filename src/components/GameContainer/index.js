import React, { Component } from 'react';
import clickCards from '../../clickCards.json';
import Card from '../Card';
import Jumbotron from '../Jumbotron';

class GameContainer extends Component {

    state = {
        cards: clickCards,
        score: 0,
        topScore: 0,
        clicked: []
    }

    shuffleCards = cards => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    handleIncrement = id => {
        const newScore = this.state.score + 1;
        const newCards = this.state.cards.map(card => {
            if (card.id === id) {
                card.clicked = true;
            }
            return card;
        });

        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        }

        this.setState({
            cards: this.shuffleCards(newCards),
            score: newScore
        });

    }

    handleReset = () => {
        this.setState({
            cards: clickCards,
            score: 0,
            clicked: []
        });
    }

    handleGame = (id) => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            this.handleReset();
        }
    };

    render() {
        return (
            <div>
                <Jumbotron />
                <p>Score: {this.state.score}</p>
                <p>Top Score: {this.state.topScore}</p>
                <div className="container">
                    {this.state.cards.map(card => {
                        return (
                            <Card
                                key={card.id}
                                id={card.id}
                                image={card.image}
                                clicked={card.clicked}
                                handleGame={this.handleGame}
                            />
                        )
                    }
                    )}
                </div>
            </div>
        )

    };
};

export default GameContainer;