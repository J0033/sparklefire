module.exports = {

	name: 'qotd',

	description: 'make the QOTD role mentionable for 7s then unmentionable!',

	execute(message, args) {

        if(message.member.roles.has("570532388913020929")){

message.guild.roles.find(r

=> r.name == "QOTD").setMentionable(true, 'QOTD Mention').then(() => {

            message.channel.send(`QOTD Role is now mentionable for 7 seconds. <@${message.author.id>`);

});

setTimeout(() => {

message.guild.roles.find(r => r.name == "QOTD").setMentionable(flase, 'QOTD Mention Timeout').then(() => {

message.channel.send(`QOTD Role is now unmentionable. <@${message.author.id>`);

});

 }, 10000);
        });

	},

};