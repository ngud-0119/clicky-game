import React from 'react';
import './ProgressBar.css';

const ProgressBar = props => (
	<nav className = "container-fluid">
		<p>Score: {props.score} </p><p>Top Score: {props.topScore}</p>
	</nav>
);
export default ProgressBar;