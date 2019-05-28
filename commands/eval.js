module.exports = {
	name: 'eval',
	description: 'evaluate code!',
	execute: async(message, args) => {
        if (message.author.id != "556969659531001858")

        function clean(text) {

  if (typeof(text) === "string")

    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));

  else

      return text;

}

        try {

            const code = args.join(" ");

            let evaled = await eval(code);

        

            if (typeof evaled !== "string") {

                evaled = require("util").inspect(evaled);

            }

            if(!evaled){

                return message.channel.send('Empty Response')

            }

            if (evaled.length >= 2000) message.channel.send(evaled.slice(0, 1999));

                

            if (evaled.length <= 0) {

                return;

            }

            message.channel.send(clean(evaled), {

                code: "js"

            });

        } catch (err) {

            message.channel.send(`\`\`\`js\n${clean(err.stack)}\n\`\`\``);

        }
	},
};
