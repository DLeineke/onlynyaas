import {
	createApiHandler,
	respondJson,
} from "@/assets/server";


export default createApiHandler({
	label: __filename,
	handler: async (req, res) => {
		const data = [
			{
				title: `Gachi`,
				description: `Gachi is a meme`,
				thumbnail: `https://media.discordapp.net/attachments/1000181112653500467/1187535428782395424/Aniki_fbf85f_6534631.jpg`,
				color: 'red',
				musicUrl: 'https://www.youtube.com/watch?v=1lHXfGAlp58',
			},
			{
				title: `Gachi`,
				description: `Gachi is a meme`,
				thumbnail: `https://media.discordapp.net/attachments/1000181112653500467/1187535428782395424/Aniki_fbf85f_6534631.jpg`,
				color: 'green',
				musicUrl: 'https://www.youtube.com/watch?v=1lHXfGAlp58',
			},
			{
				title: `Gachi`,
				description: `Gachi is a meme`,
				thumbnail: `https://media.discordapp.net/attachments/1000181112653500467/1187535428782395424/Aniki_fbf85f_6534631.jpg`,
				color: 'blue',
				musicUrl: 'https://www.youtube.com/watch?v=1lHXfGAlp58',
			},
		]
		return respondJson(res, data);
	},
});