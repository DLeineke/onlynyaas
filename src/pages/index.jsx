import { useFetch } from "@/assets/client";
import CardGachi from "@/components/CardGachi";
import Feeter from "@/components/Feeter";
import { useSnackbar } from "@/components/Snackbar";
import { CircularProgress } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";

// General idea: The website is a whitelist uploading library. Upload via Nyaa bot and then anonomous users can upvote/downvote the things uploaded
// Gifs/gachi/sounds/clickable interaction maybe

//TODO: Componentize cards, make clickable,
// Get card you can click on and they play music. Queue up music and play it

export default function PageIndex() {
	const { successSnack, errorSnack } = useSnackbar();

	const [data, setData] = useState([]);
	const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

	const [getGachi, cardsLoading, error] = useFetch(
		() => ({
			url: "/api/getGachi",
			ok(json) {
				setData(json);
				successSnack("Gachi loaded");
			},
			error(err) {
				errorSnack(`Failed Gachi`);
			},
		}),
		[],
	);

	useEffect(() => {
		getGachi();
	}, [getGachi]);

	const onPlay = useCallback((musicUrl) => {
		setCurrentlyPlaying(musicUrl);
	}, []);

	const componentCardGachis = useMemo(() => {
		return data.map((item, i) => (
			<CardGachi
				key={i}
				title={item.title}
				description={item.description}
				thumbnail={item.thumbnail}
				color={item.color}
				musicUrl={item.musicUrl}
				onPlay={onPlay}
			/>
		));
	}, [data, onPlay]);

	return (
		<>
			{cardsLoading && <CircularProgress />}
			{componentCardGachis}
			<Feeter
				currentlyPlaying={currentlyPlaying}
				setCurrentlyPlaying={setCurrentlyPlaying}
			/>
		</>
	);
}
