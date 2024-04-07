import PropTypes from "prop-types";
import React, { useCallback, useMemo } from "react";

const styles = {
	squareThing: {
		display: `inline-block`,
		margin: `4px`,
		width: `260px`,
		textAlign: `center`,
		cursor: "pointer",
		border: `4px solid black`,
		borderRadius: `8px`,
	},
	thumbnail: {
		width: `100%`,
		height: `auto`,
		borderRadius: `4px`,
	},
};

export default function CardGachi({
	title,
	description,
	thumbnail,
	color,
	musicUrl,
	onPlay,
}) {
	const style = useMemo(() => {
		return {
			...styles.squareThing,
			backgroundColor: color,
		};
	}, [color]);

	const handleClick = useCallback((event) => {
		console.log("Card clicked: ", title);
		onPlay(musicUrl);
	}, []);

	return (
		<div onClick={handleClick} style={style}>
			<h1>{title}</h1>
			<p>{description}</p>
			<img style={styles.thumbnail} src={thumbnail} />
		</div>
	);
}

CardGachi.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	musicUrl: PropTypes.string.isRequired,
	onPlay: PropTypes.func.isRequired,
};
