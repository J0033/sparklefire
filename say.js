module.exports = {

	name: 'say',	description: 'Make the bot say something', args: true,

	execute(message, args) {
  if(message.member.permissions.has("manage_guild",
true)) {
    message.delete(10);
    message.channel.send(args.join(" "));
}


        });

	},

};
