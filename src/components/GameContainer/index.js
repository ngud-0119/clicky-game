import React, { Component } from 'react';
import clickCards from '../../clickCards.json';
import Card from '../Card';
import Jumbotron from '../Jumbotron';

class GameContainer extends Component {

    state = {
        cards: clickCards,
        score: 0,
        topScore: 0,
        clicked: [],
        progressMessage: ""
    }

    componentDidMount(){
        this.setState({
            progressMessage: "Good Luck!"
        })
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

        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        }

        this.setState({
            cards: this.shuffleCards(this.state.cards),
            score: newScore,
            progressMessage: "Great job! Keep going!"
        });

    }

    handleReset = () => {
        this.setState({
            cards: clickCards,
            score: 0,
            clicked: [],
            progressMessage: "You already clicked that! Try Again!"
        });
    }

    handleGame = (id) => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            if (this.state.topScore === 10) {
                prompt("You win! Play again!");
                this.handleReset();
            } else {
                this.handleReset();
            };
        };
    };

    render() {
        return (
            <div>
                <Jumbotron
                    score={this.state.score}
                    topScore={this.state.topScore}
                    progressMessage={this.state.progressMessage}>
                </Jumbotron>
                <div className="container">
                    {this.state.cards.map(card => {
                        return (
                            <Card
                                key={card.id}
                                id={card.id}
                                image={card.image}
                                letter={card.letter}
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