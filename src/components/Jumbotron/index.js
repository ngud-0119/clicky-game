import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
	<header className ="Jumbotron">
		<h1>Puppy Memory Game!</h1>
        <p>To get started, click on any dog picture. Don't click the same dog twice or it's game over!</p>
	
    <nav className="container-fluid">
		<h2>Score: {props.score}</h2>
        <h2>Top Score: {props.topScore}</h2>
        <br/>
        <h2>{props.progressMessage}</h2>
	</nav>
    </header>
);
export default Jumbotron;
