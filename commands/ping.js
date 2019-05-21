module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
        let start = Date.now();
		message.channel.send('Pong.').then((msg) => {
            msg.edit(`🏓 Pong! \`${Date.now() - start}ms\``);
        });
	},
};