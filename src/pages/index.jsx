import CardGachi from "@/components/CardGachi";
import Feeter from "@/components/Feeter";
import { useSnackbar } from "@/components/Snackbar";
import { CircularProgress } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

// General idea: The website is a whitelist uploading library. Upload via Nyaa bot and then anonomous users can upvote/downvote the things uploaded
// Gifs/gachi/sounds/clickable interaction maybe

//TODO: Componentize cards, make clickable,
// Get card you can click on and they play music. Queue up music and play it

export default function PageIndex() {
	const { successSnack, errorSnack } = useSnackbar();

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

	const getGachi = useCallback(async () => {
		setLoading(true);
		const res = await fetch(`/api/getGachi`);
		if (res.status !== 200) {
			setLoading(false);
			errorSnack(`Failed Gachi`);
			return;
		}
		const json = await res.json();
		setData(json);
		setLoading(false);
		successSnack(`Gachi loaded`);
	}, [errorSnack, successSnack]);

	useEffect(() => {
		getGachi();
	}, [getGachi]);

	const handlePlay = (musicUrl) => {
		setCurrentlyPlaying(musicUrl);
	};

	return (
		<>
			{loading && <CircularProgress />}
			{data.map((item, i) => (
				<CardGachi
					key={i}
					title={item.title}
					description={item.description}
					thumbnail={item.thumbnail}
					color={item.color}
					musicUrl={item.musicUrl}
					onPlay={handlePlay}
				/>
			))}
			<Feeter
				currentlyPlaying={currentlyPlaying}
				setCurrentlyPlaying={setCurrentlyPlaying}
			/>
		</>
	);
}
