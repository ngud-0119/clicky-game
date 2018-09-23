import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
	<header className ="Jumbotron">
		<h1>Puppy Memory Game!</h1>
        <p className="jumboHeading">To get started, click on any dog picture. Don't click the same dog twice or it's game over!</p>
        <p className="jumboHeading">You'll know you lost when the cards do not shuffle again!</p>	
    <nav className="container-fluid progressBar">
		<h3>Score: {props.score}</h3>
        <h3>Top Score: {props.topScore}</h3>
        <br/>
        <p>{props.progressMessage}</p>
	</nav>
    </header>
);
export default Jumbotron;
