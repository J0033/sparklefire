module.exports = {

	name: 'qotd',	cooldown: 86400000,

	description: 'Makes the QOTD role mentionable for 7s and then unmentionable',

	execute(message, args) {       

if(message.member.roles.has("570532388913020929")){

message.guild.roles.find(r => r.name == "QOTD").setMentionable(true, 'QOTD Mention').then(() => {

            message.channel.send(`QOTD Role is now mentionable for 7 seconds. <@${message.author.id}>`);

}).then(() => {

setTimeout(() => {

message.guild.roles.find(r => r.name == "QOTD").setMentionable(false, 'QOTD Mention Timeout').then(() => {

message.channel.send(`QOTD Role is now unmentionable. <@${message.author.id}>`);

});

 }, 7500);

});

}

	},

};
