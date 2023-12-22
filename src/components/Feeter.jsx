import PropTypes from "prop-types";
import React from "react";

const styles = {
	FootThing: {
		position: "fixed",
		bottom: 0,
		left: 0,
		width: "100%",
		background: "#eee",
		padding: "10px",
		textAlign: "center",
	},
};

export default function Footer({ currentlyPlaying, setCurrentlyPlaying }) {
	const handleAudioStop = () => {
		setCurrentlyPlaying(null);
	};

	return (
		<div style={styles.FootThing}>
			{currentlyPlaying && (
				<audio controls autoPlay onEnded={handleAudioStop}>
					<source src={currentlyPlaying} type="audio/mp3" />
					Your browser does not support the audio tag.
				</audio>
			)}
		</div>
	);
}

Footer.propTypes = {
	currentlyPlaying: PropTypes.string,
	setCurrentlyPlaying: PropTypes.func,
};
