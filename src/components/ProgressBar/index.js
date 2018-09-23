import React from 'react';
import './ProgressBar.css';

const ProgressBar = props => (
	<nav className="container-fluid">
		<h2>Score: {props.score}</h2>
        <h2>Top Score: {props.topScore}</h2>
        <br/>
        <h2>{props.progressMessage}</h2>
	</nav>
);
export default ProgressBar;