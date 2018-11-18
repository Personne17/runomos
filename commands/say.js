const Discord = require("discord.js");

module.exports.run = (client, msg, args, guild) => {

      const sayMessage = args.join(" ");
      msg.delete().catch();
      msg.channel.send(sayMessage);

}
module.exports.help = {
  name: "say"
}
