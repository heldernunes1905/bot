module.exports = {
	name: 'nowplaying',
    category: "music",
	aliases: ["np"],
	description: 'Get the song that is playing.',
	run(client, message, args, ops) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`Now playing: ${serverQueue.songs[0].title}`);
	},
};